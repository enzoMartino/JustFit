import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'shrinking-header',
  templateUrl: 'shrinking-header.html'
})

export class ShrinkingHeaderComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;

  newHeaderHeight: number;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.element.nativeElement,
      'height', this.headerHeight + 'px');
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev) {
    ev.domWrite(() => {
      this.newHeaderHeight = (this.headerHeight - ev.scrollTop);
      if (this.newHeaderHeight < 0) {
        this.newHeaderHeight = 0;
      }
      this.renderer.setElementStyle(this.element.nativeElement, 'height',
        this.newHeaderHeight + 'px');
    });
  }

}
