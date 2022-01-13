import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log(' esta imagen revento =>', this.elHost);
    elNative.src = '../../../assets/images/no-image.png'
  }

  constructor(private elHost: ElementRef) { }

}
