import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesListViewComponent } from './schemes-list-view.component';

describe('SchemesListViewComponent', () => {
  let component: SchemesListViewComponent;
  let fixture: ComponentFixture<SchemesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
