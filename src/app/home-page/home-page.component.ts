import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SchemesService } from '../db/schemes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  messageForm!: FormGroup;
  loading: boolean = false;
  constructor(
    private location: Location,
    private router: Router,
    private ss: SchemesService
  ) {}

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      description: new FormControl('', Validators.required),
    });
  }

  navigateToSchemeSection() {
    this.router.navigate(['/'], { fragment: 'schemes' });
    this.location.replaceState(this.location.path(false), '');
  }
  async sendMessage() {
    this.loading = true;
    const sendEmail = await this.ss.sendEmailToAdmin(this.messageForm.value);
    this.messageForm.reset();
    if (sendEmail.status === 'SUCCESS') {
      this.loading = false;
      alert(sendEmail.message);
    } else {
      this.loading = false;
      alert(sendEmail.message);
    }
  }
}
