import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie8Component } from './movie8.component';

describe('Movie8Component', () => {
  let component: Movie8Component;
  let fixture: ComponentFixture<Movie8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
