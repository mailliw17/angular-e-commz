import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCatalogPageComponent } from './b-catalog-page.component';

describe('BCatalogPageComponent', () => {
  let component: BCatalogPageComponent;
  let fixture: ComponentFixture<BCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCatalogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
