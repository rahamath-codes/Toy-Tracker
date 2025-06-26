import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToys } from './add-toys';

describe('AddToys', () => {
  let component: AddToys;
  let fixture: ComponentFixture<AddToys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
