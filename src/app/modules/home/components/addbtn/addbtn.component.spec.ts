import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbtnComponent } from './addbtn.component';

describe('AddbtnComponent', () => {
  let component: AddbtnComponent;
  let fixture: ComponentFixture<AddbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
