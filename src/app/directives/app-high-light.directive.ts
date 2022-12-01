import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective {

  @HostListener('mouseenter')  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseleave')  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

}
