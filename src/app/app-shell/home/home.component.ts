import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menuBox: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openNav() {
    this.menuBox = true;
  }

  closeNav() {
    this.menuBox = false;
  }
  navigateToAboutSection() {
    this.router.navigate(['/'], { fragment: 'aboutUs' });
  }
  navigateToHelpSection() {
    this.router.navigate(['/'], { fragment: 'helpPage' });
  }
}
