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
  category!: string;
  schemeId!: string;
  dataOb!: Observable<any>;

  constructor(private route: ActivatedRoute, private ss: SchemesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (param) => {
      this.schemeId = param['schemeId'];
      this.category = param['schemeCategory'];
    });

    this.dataOb = this.ss.getSchemeById(this.schemeId).pipe(
      map((v: any) => {
        return v;
      })
    );
  }
}
