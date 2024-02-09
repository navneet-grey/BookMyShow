import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie11Component } from './movie11.component';

describe('Movie11Component', () => {
  let component: Movie11Component;
  let fixture: ComponentFixture<Movie11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
