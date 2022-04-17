import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*title = 'one-lesson';
    fullName = 'John';
    placeholder = 'Введите значение';
    imageUrl = './assets/user.jpg';
    counter = 0;
    username = '';

    isThree() {
      return 1 + 1 === 2;
    }

    increase(event: any) {
      console.log(event.pointerType);

      this.counter++;

      if (this.counter > 5) {
        this.counter = 0;
        this.username = 'admin';
      }
    }*/

  get ourClasses() {
    return {
      'box': this.isBox,
      'redBox': this.isRedBox
    };
  }

  isRedBox = false;

  isBox = false;

  posts = [
    {
      name: 'Пост 1',
      text: 'Текст поста 1'
    },
    {
      name: 'Пост 2',
      text: 'Текст поста 2'
    },
    {
      name: 'Пост 3',
      text: 'Текст поста 3'
    },
    {
      name: 'Пост 4',
      text: 'Текст поста 4'
    },
  ];

  browser = 'opera';

  ngOnInit() {}
}
