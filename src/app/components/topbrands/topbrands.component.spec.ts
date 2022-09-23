import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbrandsComponent } from './topbrands.component';

describe('TopbrandsComponent', () => {
  let component: TopbrandsComponent;
  let fixture: ComponentFixture<TopbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
