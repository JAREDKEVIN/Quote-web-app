import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelClass } from './model-class';

describe('ModelClass', () => {
  let component: ModelClass;
  let fixture: ComponentFixture<ModelClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelClass ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(new ModelClass).toBeTruthy();
  });
});
