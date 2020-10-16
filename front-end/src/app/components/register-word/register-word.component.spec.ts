import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWordComponent } from './register-word.component';

describe('RegisterWordComponent', () => {
  let component: RegisterWordComponent;
  let fixture: ComponentFixture<RegisterWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
