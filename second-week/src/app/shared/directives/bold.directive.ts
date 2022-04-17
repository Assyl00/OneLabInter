import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  @Input() myFontSize: number = 10;
  @Input() attr2: number = 10;

  private yellowToggle = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
    // this.elementRef.nativeElement.style.color = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseenter') onMouseEnter() {
    // console.log('Вы навели мышкой!');
    this.elementRef.nativeElement.style.color = 'blue';
    this.renderer.addClass(this.elementRef.nativeElement, 'box');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // console.log('Пока мышка!');
    this.elementRef.nativeElement.style.color = 'red';
    this.renderer.removeClass(this.elementRef.nativeElement, 'box');
  }

  @HostListener('window:keydown.enter', ['$event']) handleKeyDown(event: KeyboardEvent) {
    this.elementRef.nativeElement.style.color = 'yellow';
  }

  @HostListener('window:keyup.enter', ['$event']) handleKeyUp(event: KeyboardEvent) {
    this.elementRef.nativeElement.style.color = 'black';
    console.log(this.myFontSize);
    this.elementRef.nativeElement.style.fontSize = this.myFontSize + 'px';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.myFontSize + 'px');

  }

  @HostListener('window:keydown', ['$event']) handleKey(event: KeyboardEvent) {
    // console.log(event);
  }

}
