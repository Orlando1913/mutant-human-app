import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantValidationComponent } from './mutant-validation.component';

describe('MutantValidationComponent', () => {
  let component: MutantValidationComponent;
  let fixture: ComponentFixture<MutantValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutantValidationComponent]
    });
    fixture = TestBed.createComponent(MutantValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
