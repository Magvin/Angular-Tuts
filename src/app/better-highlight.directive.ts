import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor
  }
  @HostListener('mouseenter') mouseover(evenData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(evenData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
    this.backgroundColor = this.defaultColor;
  }
}
