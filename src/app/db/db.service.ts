import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { dexieDb } from './db';
import { IScheme } from './interface';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  async getSchemesData() {
    const save: any = axios
      .post(
        'https://us-central1-schemes-india.cloudfunctions.net/api/getAllScheme'
      )
      .then(async (response) => {
        // Handle the response data
        await response?.data.map(async (v: any) => {
          if (v) await dexieDb.schemesData.put(v);
        });
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
    return save;
  }

  async addScheme(data: any) {
    const updatedData = await axios.post(
      'https://us-central1-schemes-india.cloudfunctions.net/api/createScheme',
      data
    );
    if (updatedData.data.status === 'SUCCESS') {
      await dexieDb.schemesData.put(data);
      return {
        status: 'SUCCESS',
        message: 'The scheme was successfully updated to the database.',
      };
    } else {
      return {
        status: 'ERROR',
        message: 'Error updating scheme to the database',
      };
    }
  }

  async sendEmailToAdmin(data: any) {
    const sendEmail = await axios.post(
      'https://us-central1-schemes-india.cloudfunctions.net/api/sendEmail',
      data
    );
    console.log(data);
    if (sendEmail.data.status === 'SUCCESS') {
      return {
        status: 'SUCCESS',
        message: 'Email sent successfully to Admin',
      };
    } else {
      return {
        status: 'Error',
        message: 'Errored while sending email',
      };
    }
  }
}
