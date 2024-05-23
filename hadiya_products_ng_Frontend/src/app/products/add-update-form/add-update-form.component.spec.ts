import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateFormComponent } from './add-update-form.component';

describe('AddUpdateFormComponent', () => {
  let component: AddUpdateFormComponent;
  let fixture: ComponentFixture<AddUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
