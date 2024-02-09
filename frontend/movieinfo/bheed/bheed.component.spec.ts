import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BheedComponent } from './bheed.component';

describe('BheedComponent', () => {
  let component: BheedComponent;
  let fixture: ComponentFixture<BheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
