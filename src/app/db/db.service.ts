import { Injectable } from '@angular/core';
import axios from 'axios';
import { dexieDb } from './db';
import { IScheme } from './interface';
@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  async getSchemesData() {
    const save = await axios.post('http://localhost:4000/getAllScheme');

    const allScheme = save.data;

    allScheme.map(async (scheme: IScheme) => {
      await dexieDb.schemeData
        .put(scheme)
        .then(() => console.log('Data added to db'))
        .catch((err) => console.log(err));
    });
  }

  async addScheme(data: any) {
    const res = await axios.post('http://localhost:4000/createScheme', data);
    console.log(res.data);
  }
}
