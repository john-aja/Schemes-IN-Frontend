import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeCategoryPageComponent } from './scheme-category-page.component';

describe('SchemeCategoryPageComponent', () => {
  let component: SchemeCategoryPageComponent;
  let fixture: ComponentFixture<SchemeCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemeCategoryPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchemeCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
