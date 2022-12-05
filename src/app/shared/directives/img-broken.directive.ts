import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    let element = this.elHost.nativeElement;

    // element.src = 'test'
  }

  constructor(private elHost: ElementRef) {

  }

}
