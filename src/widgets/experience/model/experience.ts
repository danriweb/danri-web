export interface Job {
  id: string;
  number: number;
  domain: string;
  domainKey: string;
  teamType: "solo" | "team";
  projectType: string;
  achievements: string[];
  stack: string[];
  architecture: string;
}

export const jobs: Job[] = [
  {
    id: "e-commerce",
    number: 1,
    domain: "E-Commerce",
    domainKey: "e-commerce",
    teamType: "solo",
    projectType: "brandedShop",
    achievements: ["mobileFirst", "uxReduction", "documented"],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Zustand",
      "Zod",
      "React Hook Form",
      "TanStack Query",
      "shadcn/ui",
      "Tabler Icons",
    ],
    architecture: "FSD + shadcn/ui",
  },
  {
    id: "edtech",
    number: 2,
    domain: "EdTech",
    domainKey: "edtech",
    teamType: "team",
    projectType: "learningPlatform",
    achievements: ["progressModules", "decomposed23", "a11y"],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zod",
      "React Hook Form",
      "TanStack Query",
      "Recharts",
    ],
    architecture: "FSD + A11y",
  },
  {
    id: "logistics",
    number: 3,
    domain: "Logistics",
    domainKey: "logistics",
    teamType: "team",
    projectType: "freightPlatform",
    achievements: ["orderTracking", "virtualization", "tanstackMigration"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "TanStack Table", "shadcn/ui"],
    architecture: "Classic → FSD + shadcn/ui",
  },
  {
    id: "fintech",
    number: 4,
    domain: "FinTech / PFM",
    domainKey: "fintech",
    teamType: "team",
    projectType: "pfmPlatform",
    achievements: ["dashboard", "rerenderOpt", "lazyFramer"],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Recharts",
      "Material UI",
      "i18n",
    ],
    architecture: "FSD + MUI + i18n",
  },
  {
    id: "e-commerce-2",
    number: 5,
    domain: "E-Commerce",
    domainKey: "e-commerce-2",
    teamType: "solo",
    projectType: "localShop",
    achievements: ["fullCycle", "restApi", "robokassa"],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Robokassa"],
    architecture: "Vanilla + PHP",
  },
];
