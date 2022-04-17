import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  Output,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, EventEmitter
} from "@angular/core";

@Component({
  selector: 'child-comp',
  template: `
    <p>Привет {{name}}</p>
    <button (click)="changeData()">change data and send</button>
  `
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name: string = '';
  @Input() age: number = 0;

  @Output() changeDataHandle = new EventEmitter();

  constructor() {
    // console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // вызывается до метода ngOnInit() при начальной установке свойств, которые связаны механизмом привязки, а также
    // при любой их переустановке или изменении их значений. Данный метод в качестве параметра принимает объект класса
    // SimpleChanges, который содержит предыдущие и текущие значения свойства.
    for (let propName in changes) {
      let change = changes[propName];
      let current = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      // console.log(`${propName}: currentValue = ${current}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    // вызывается один раз после установки свойств компонента, которые участвуют в привязке. Выполняет инициализацию компонента
    // console.log('ngOnInit');
    console.log('name', this.name);
    console.log('age', this.age);
  }

  changeData() {
    this.changeDataHandle.emit('Hello from child-comp');
  }

  ngDoCheck() {
    // вызывается при каждой проверке изменений свойств компонента сразу после методов ngOnChanges и ngOnInit
    // console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // вызывается один раз после метода ngDoCheck() после вставки содержимого в представление компонента кода html
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // вызывается фреймворком Angular при проверке изменений содержимого, которое добавляется в представление
    // компонента. Вызывается после метода ngAfterContentInit() и после каждого последующего вызова метода ngDoCheck().
    // console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    // вызывается фреймворком Angular после инициализации представления компонента, а также представлений дочерних
    // компонентов. Вызывается только один раз сразу после первого вызова метода ngAfterContentChecked()
    // console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    // вызывается фреймворком Angular после проверки на изменения в представлении компонента, а также проверки
    // представлений дочерних компонентов. Вызывается после первого вызова метода ngAfterViewInit() и
    // после каждого последующего вызова ngAfterContentChecked()
    // console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    // вызывается перед тем, как фреймворк Angular удалит компонент.
    // console.log('компонент удален');
  }
}
