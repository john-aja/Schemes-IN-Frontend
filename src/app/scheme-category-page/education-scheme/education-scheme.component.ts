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

  constructor(private ss: SchemesService, private route: Router) {}

  ngOnInit(): void {
    const id = this.route.url.split('/').pop();

    this.currentCategory = id;
    console.log(this.currentCategory);
    this.getData();
  }

  getData() {
    this.dataEducation = this.ss.addSchemeToDb().pipe(
      map((schemes: any) => {
        return schemes.filter((scheme: any) => {
          if (scheme.category.toLowerCase() === this.currentCategory) {
            console.log(scheme);
            return scheme;
          }
        });
      })
    );
  }
}
