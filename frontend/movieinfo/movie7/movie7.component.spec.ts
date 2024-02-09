import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie7Component } from './movie7.component';

describe('Movie7Component', () => {
  let component: Movie7Component;
  let fixture: ComponentFixture<Movie7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
