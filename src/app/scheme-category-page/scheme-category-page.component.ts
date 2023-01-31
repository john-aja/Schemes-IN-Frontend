import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheme-category-page',
  templateUrl: './scheme-category-page.component.html',
  styleUrls: ['./scheme-category-page.component.scss'],
})
export class SchemeCategoryPageComponent implements OnInit {
  schemeCategories = [
    {
      no: 1,
      category: 'Education',
      imageUrl: '../../assets/education.svg',
      hover: false,
    },
    {
      no: 3,
      category: 'Specially Abled Person',
      imageUrl: '../../assets/differently_abled.svg',
      hover: false,
    },
    {
      no: 3,
      category: "Women's",
      imageUrl: '../../assets/women.svg',
      hover: false,
    },
    {
      no: 4,
      category: 'SC/ST',
      hover: false,
    },
    {
      no: 5,
      category: 'BC/OBC/MBC',
      hover: false,
    },
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  isActive(item: any) {
    console.log(item);
    if (this.schemeCategories.includes(item.category)) true;
  }

  changeRoute(category: any) {
    this.route.navigateByUrl(
      'scheme-category/' +
        category
          .replace('/', '-')
          .replace('/', '-')
          .replace(' ', '-')
          .replace(' ', '-')
          .split(' ')
          .join()
          .toLowerCase()
    );
  }
}
