import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaboutComponent } from './aabout.component';

describe('AaboutComponent', () => {
  let component: AaboutComponent;
  let fixture: ComponentFixture<AaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AaboutComponent]
    });
    fixture = TestBed.createComponent(AaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
