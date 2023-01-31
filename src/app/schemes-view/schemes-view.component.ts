import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SchemesService } from '../db/schemes.service';

@Component({
  selector: 'app-schemes-view',
  templateUrl: './schemes-view.component.html',
  styleUrls: ['./schemes-view.component.scss'],
})
export class SchemesViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ss: SchemesService) {}
  schemeId: any;
  dataOb!: Observable<any>;

  ngOnInit(): void {
    this.route.params.subscribe(async (param) => {
      this.schemeId = param['schemeId'];
      console.log(this.schemeId);
    });
    this.dataOb = this.ss.getSchemeById(this.schemeId).pipe(
      map((v: any) => {
        console.log(v);
        return v;
      })
    );

    // console.log(this.dataOb.subscribe());
  }

  getSchemeData() {}
}
