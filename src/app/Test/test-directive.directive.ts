import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el: ElementRef) {
    console.log(this.el);
    this.el.nativeElement.innerText = "Unit1: ";
    this.el.nativeElement.style.backgroundColor = "grey";
    this.el.nativeElement.style.color = "white";
  }


  //event
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "yellow";
    this.el.nativeElement.style.color = "black";
  }

  //event

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "grey";
    this.el.nativeElement.style.color = "white";
  }


  @HostListener('click') onClick() {
    console.log("clicked!");
  }


  

}
