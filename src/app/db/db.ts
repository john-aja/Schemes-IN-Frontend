import Dexie, { Table } from 'dexie';

export interface IScheme {
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
}

export class AppDB extends Dexie {
  schemesData!: Table<IScheme, number>;
  constructor() {
    super('DexieDBScheme');
    this.version(3).stores({
      schemesData: 'schemeId',
    });
    this.open()
      .then((data) => console.log(data, 'DB Opened'))
      .catch((err) => console.log(err.message));
  }
}
export const dexieDb = new AppDB();
