import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSchemeComponent } from './education-scheme.component';

describe('EducationSchemeComponent', () => {
  let component: EducationSchemeComponent;
  let fixture: ComponentFixture<EducationSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationSchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
