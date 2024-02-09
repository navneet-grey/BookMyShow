import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie9Component } from './movie9.component';

describe('Movie9Component', () => {
  let component: Movie9Component;
  let fixture: ComponentFixture<Movie9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
