import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetproductsComponent } from './getproducts.component';

describe('GetproductsComponent', () => {
  let component: GetproductsComponent;
  let fixture: ComponentFixture<GetproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
