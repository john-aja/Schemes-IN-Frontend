import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SchemesService } from '../db/schemes.service';
@Component({
  selector: 'app-scheme-category-page',
  templateUrl: './scheme-category-page.component.html',
  styleUrls: ['./scheme-category-page.component.scss'],
})
export class SchemeCategoryPageComponent implements OnInit {
  constructor(private ss: SchemesService) {}
  dataEducation!: Observable<any>;
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.dataEducation = this.ss.addSchemeToDb().pipe(
      map((schemes: any) => {
        const educationScheme = schemes.filter((scheme: any) => {
          if (scheme.category === 'Education') {
            console.log(scheme);
            return scheme;
          }
        });
        return educationScheme;
      })
    );
    console.log(this.dataEducation);
    return this.dataEducation.subscribe();
  }
}
