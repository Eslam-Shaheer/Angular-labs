import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRounded]',
})
export class RoundedDirective {
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.borderRadius = '20px';
    this.el.nativeElement.style =
      'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;';
  }
  @HostListener('mouseenter') onMouseOver() {
    this.el.nativeElement.style =
      'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;';
    this.el.nativeElement.style.transitionDuration = '.3s';
  }

  @HostListener('mouseleave') onMouseout() {
    this.el.nativeElement.style =
      'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;';
    this.el.nativeElement.style.transitionDuration = '.3s';
  }
}
