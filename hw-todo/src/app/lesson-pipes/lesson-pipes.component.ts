import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-pipes',
  templateUrl: './lesson-pipes.component.html',
  styleUrls: ['./lesson-pipes.component.scss']
})
export class LessonPipesComponent implements OnInit {

  currentDate = 'Wed Apr 13 2022 20:26:13 GMT+0600';

  username = 'ivanov';

  constructor() { }

  ngOnInit(): void {}
}
