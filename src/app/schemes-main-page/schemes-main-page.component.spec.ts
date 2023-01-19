import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesMainPageComponent } from './schemes-main-page.component';

describe('SchemesMainPageComponent', () => {
  let component: SchemesMainPageComponent;
  let fixture: ComponentFixture<SchemesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
