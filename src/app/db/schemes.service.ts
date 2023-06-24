import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { from } from 'rxjs';
import { dexieDb } from './db';
import { DbService } from './db.service';
@Injectable({
  providedIn: 'root',
})
export class SchemesService {
  constructor(private dbs: DbService) {}

  async addSchemeToDb() {
    return from(
      liveQuery(async () => {
        const schemes = await dexieDb.schemesData.toArray();
        if (schemes.length === 0) {
          return await this.dbs.getSchemesData();
        }
        return await dexieDb.schemesData.toArray();
      })
    );
  }

  getSchemeById(schemeId: any) {
    return from(
      liveQuery(async () => {
        const schemes = await dexieDb.schemesData.toArray();
        return schemes.filter((scheme) => {
          if (scheme.schemeId === schemeId) return scheme;
          else return;
        });
      })
    );
  }
}
