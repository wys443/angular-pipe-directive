import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerText = "Unit1: "
    this.el.nativeElement.innerHTML = "<div> Unit1: Hello World </div>"
    this.el.nativeElement.style.color = "red";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('red');
    this.fontSize('30px');
    this.changeColor('white');
  }

  @HostListener('mouseleave') onMoveLeave() {
    this.highLight('');
    this.fontSize('');
    this.changeColor('');
  }


  private highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
  private fontSize(size: string){
    this.el.nativeElement.style.fontSize = size;
  }

  private changeColor(color: string){
    this.el.nativeElement.style.color = color;
  }

}
