export const CASE_APP_NAME = "Agile Desk";
export const CASE_APP_FULL_NAME = "Agile Desk CMS";

// The case app also has its own dedicated domain (agiledesk.astris-integrity.com,
// see proxy.ts). Client components use this to pick a sensible default
// post-login destination when no explicit `redirect` param is present.
export function isCaseAppHost(): boolean {
  return typeof window !== "undefined" && window.location.hostname.startsWith("agiledesk.");
}
