import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesGenComponent } from './quotes-gen.component';

describe('QuotesGenComponent', () => {
  let component: QuotesGenComponent;
  let fixture: ComponentFixture<QuotesGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
