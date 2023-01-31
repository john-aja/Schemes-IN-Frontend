export interface ISchemeBenefits {
  category?: string[];
  benefits?: string[];
}

export interface ISchemeApplicationProcedure {
  note?: string[];
  procedure?: string[];
}

export interface ISchemeDocuments {
  note?: string[];
  documents?: string[];
}

export interface IScheme {
  schemeType: string;
  schemeName: string;
  schemeId: string;
  schemeNo: number;
  deleted: boolean;
  category: string;
  launchedBy: string;
  launchedOn?: string;
  description: string;
  feature?: string[];
  beneficiaries?: string[];
  eligibility?: string[];
  schemeBenefits?: ISchemeBenefits;
  applicationProcedure?: ISchemeApplicationProcedure;
  documentsRequired?: ISchemeDocuments;
  link?: string;
}
