import { createClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  await supabase.auth.signOut();
  // 303 forces the browser to follow up with GET regardless of the original
  // POST — the default 307 would replay as POST against /login, which has
  // no POST handler and 405s.
  return NextResponse.redirect(new URL("/login", request.url), 303);
}
