import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie6Component } from './movie6.component';

describe('Movie6Component', () => {
  let component: Movie6Component;
  let fixture: ComponentFixture<Movie6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
