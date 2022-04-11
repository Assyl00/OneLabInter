import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  isKpop = false;
  isHiphop = false;
  isLatino = false;

  styleCheckbox = "style-cb";

  ngOnInit(): void {
  }

}
