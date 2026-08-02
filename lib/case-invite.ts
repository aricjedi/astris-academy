import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database.types";

/**
 * Invites a new case-app user, or — if the email already has an auth
 * account (a prior invite, or an existing Academy account) — reassigns
 * their case_members row to the new role/company instead of erroring.
 * A person can only hold one case-app role at a time by design, so
 * re-inviting the same email into a different org is a legitimate move,
 * not a duplicate-registration error.
 */
export async function inviteOrReassignCaseMember(
  admin: SupabaseClient<Database>,
  params: {
    email: string;
    fullName?: string | null;
    role: "org_admin" | "investigator";
    companyId: string;
    redirectTo: string;
  }
): Promise<{ userId: string } | { error: string }> {
  const { email, fullName, role, companyId, redirectTo } = params;

  const { data: inviteData, error: inviteError } = await admin.auth.admin.inviteUserByEmail(email, {
    data: { case_role: role, case_company_id: companyId, full_name: fullName || null },
    redirectTo,
  });

  let userId: string;
  if (inviteError) {
    const alreadyRegistered =
      inviteError.code === "email_exists" || inviteError.message.includes("already been registered");
    if (!alreadyRegistered) {
      return { error: inviteError.message };
    }
    const { data: list, error: listError } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    if (listError) {
      return { error: listError.message };
    }
    const existing = list.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (!existing) {
      return { error: inviteError.message };
    }
    userId = existing.id;
  } else {
    userId = inviteData.user!.id;
  }

  const { error: memberError } = await admin
    .from("case_members")
    .upsert({ user_id: userId, company_id: companyId, role }, { onConflict: "user_id" });
  if (memberError) {
    return { error: memberError.message };
  }

  return { userId };
}
