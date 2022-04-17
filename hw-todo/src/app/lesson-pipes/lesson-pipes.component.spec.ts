import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPipesComponent } from './lesson-pipes.component';

describe('LessonPipesComponent', () => {
  let component: LessonPipesComponent;
  let fixture: ComponentFixture<LessonPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
