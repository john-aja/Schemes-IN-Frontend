import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schemes-list-view',
  templateUrl: './schemes-list-view.component.html',
  styleUrls: ['./schemes-list-view.component.scss'],
})
export class SchemesListViewComponent implements OnInit {
  @Input() category: any;
  @Input() data: any;
  dataEducation!: Observable<any>;
  datOb!: Observable<any>;
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log(this.category, 'viewCategory');
  }

  onSelect(scheme: any, index: any) {
    console.log(scheme, index);
    this.route.navigateByUrl(scheme.schemeId + '/scheme');
  }
}
