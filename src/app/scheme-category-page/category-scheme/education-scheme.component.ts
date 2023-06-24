import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SchemesService } from 'src/app/db/schemes.service';

@Component({
  selector: 'app-education-scheme',
  templateUrl: './education-scheme.component.html',
  styleUrls: ['./education-scheme.component.scss'],
})
export class EducationSchemeComponent implements OnInit {
  dataEducation!: Observable<any>;
  currentCategory: any;
  selectedScheme: any;
  selectedSchemeNo: any;
  schemeView: boolean = false;
  availableSchemes: any[] = [];
  loading: boolean = false;

  constructor(private ss: SchemesService, private route: Router) {}

  async ngOnInit() {
    this.currentCategory = this.route.url.split('/').pop();

    this.getData();
  }

  async getData() {
    this.loading = true;
    this.dataEducation = (await this.ss.addSchemeToDb()).pipe(
      map((schemes: any) => {
        return schemes?.filter((scheme: any) => {
          if (
            scheme?.category?.toLowerCase() ===
            this.currentCategory.toLowerCase()
          ) {
            this.loading = false;
            this.availableSchemes.push(scheme);
            return scheme;
          }
          this.loading = false;
        });
      })
    );
  }
}
