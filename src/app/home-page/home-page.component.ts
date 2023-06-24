import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  navigateToSchemeSection() {
    this.router.navigate(['/'], { fragment: 'schemes' });
    this.location.replaceState(this.location.path(false), '');
  }
}
