import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.borderRadius = '25px';
  }
}
