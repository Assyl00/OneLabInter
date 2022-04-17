import { Component } from "@angular/core";

@Component({
  selector: 'app-seven',
  template: `
    <h4 class="my-h4">Я компонент Seven!</h4>
    <p>привет привет!</p>
    <p>привет привет!</p>
    <p>привет привет!</p>
  `,
  styles: ['.my-h4 { color: blue }'],
})
export class SevenComponent {

  constructor() {}

}
