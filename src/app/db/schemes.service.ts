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

  addSchemeToDb() {
    return from(
      liveQuery(async () => {
        const schemes = await dexieDb.schemeData.toArray();
        if (schemes.length === 0) {
          return await this.dbs.getSchemesData();
        }
        return dexieDb.schemeData.toArray();
      })
    );
  }

  getSchemeById(schemeId: any) {
    console.log(schemeId);
    return from(
      liveQuery(async () => {
        const schemes = await dexieDb.schemeData.toArray();
        return schemes.filter((scheme) => {
          if (scheme.schemeId === schemeId) {
            return scheme;
          } else return;
        });
      })
    );
  }
}
