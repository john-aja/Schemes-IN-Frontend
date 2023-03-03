import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: any) => {
      if (fragment) {
        const element = this.elementRef.nativeElement.querySelector(
          '#' + fragment
        );
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset === 0) {
      this.router.navigateByUrl('');
      this.location.replaceState(this.location.path(false), '');
    }
  }

  navigateToSchemeSection() {
    this.router.navigate(['/'], { fragment: 'schemes' });
    this.location.replaceState(this.location.path(false), '');
  }
}
