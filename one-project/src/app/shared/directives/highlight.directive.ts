import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // @Input() backgroundColor: 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    // this.elementRef.nativeElement.style.fontSize = this.fontSize + 'px';
    this.renderer.addClass(this.elementRef.nativeElement, 'selected');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.elementRef.nativeElement.style.fontSize = 30  + 'px';
    this.renderer.removeClass(this.elementRef.nativeElement, 'selected');
  }
}
