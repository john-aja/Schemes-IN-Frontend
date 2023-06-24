import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schemes-list-view',
  templateUrl: './schemes-list-view.component.html',
  styleUrls: ['./schemes-list-view.component.scss'],
})
export class SchemesListViewComponent implements OnInit {
  @Input() category!: string;
  @Input() data!: Observable<any>;
  imgArr: any[] = [
    {
      type: 'education',
      url: '../../assets/education.svg',
    },
    {
      type: 'specially-abled-person',
      url: '../../assets/differently_abled.svg',
    },
    {
      type: "women's",
      url: '../../assets/women.svg',
    },
    {
      type: 'sc-st',
      url: '',
    },
    {
      type: 'bc-obc-mbc',
      url: '',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.imgArr = this.imgArr.filter((v) => {
      if (v.type === this.category) {
        return v;
      }
    });
  }

  onSelect(scheme: any) {
    this.route.navigateByUrl(
      `scheme-category/${this.category}/${scheme.schemeId}/scheme`
    );
  }
}
