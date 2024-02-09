import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie10Component } from './movie10.component';

describe('Movie10Component', () => {
  let component: Movie10Component;
  let fixture: ComponentFixture<Movie10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
