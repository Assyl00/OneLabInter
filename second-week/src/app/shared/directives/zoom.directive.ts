import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @Input() fontSize = 80;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    // console.log('Вы навели мышкой!');
    // this.elementRef.nativeElement.style.fontSize = this.fontSize + 'px';
    this.renderer.addClass(this.elementRef.nativeElement, 'selected');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Пока мышка!');
    // this.elementRef.nativeElement.style.fontSize = 30  + 'px';
    this.renderer.removeClass(this.elementRef.nativeElement, 'selected');
  }
}
