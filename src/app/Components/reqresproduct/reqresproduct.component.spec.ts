import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresproductComponent } from './reqresproduct.component';

describe('ReqresproductComponent', () => {
  let component: ReqresproductComponent;
  let fixture: ComponentFixture<ReqresproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqresproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqresproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
