import type { SeedModule } from "./types";
import { framework } from "./modules/01-framework";
import { allegationAnalysis } from "./modules/02-allegation-analysis";
import { investigationPlanning } from "./modules/03-investigation-planning";
import { evidenceCollection } from "./modules/04-evidence-collection";
import { investigativeInterviewing } from "./modules/05-investigative-interviewing";
import { analysis } from "./modules/06-analysis";
import { reporting } from "./modules/07-reporting";
import { capstone } from "./modules/08-capstone";

export const courseSeed: {
  slug: string;
  title: string;
  description: string;
  modules: SeedModule[];
} = {
  slug: "agile-workplace-investigation-training",
  title: "Agile Workplace Investigation Training",
  description:
    "A complete, practitioner-built course in internal workplace investigations. Learn the five-phase agile methodology and conduct every investigation to one standard: it must withstand courtroom scrutiny.",
  modules: [
    framework,
    allegationAnalysis,
    investigationPlanning,
    evidenceCollection,
    investigativeInterviewing,
    analysis,
    reporting,
    capstone,
  ],
};
