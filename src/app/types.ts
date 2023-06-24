export type Course = {
  schemeType: string;
  schemeName: string;
  schemeId: string;
  category: string;
  launchedBy: string;
  launchedOn?: string;
  description: string;
  feature?: string[];
  beneficiaries?: string[];
  eligibility?: string[];
  schemeBenefits?: any;
  applicationProcedure?: any;
  documentsRequired?: any;
  link?: string;
};

export type Query = {
  schemeId: string;
};
