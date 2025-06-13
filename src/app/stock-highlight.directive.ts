import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStockHighlight]'
})
export class StockHighlightDirective implements OnChanges{
@Input() appStockHighlight!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('appStockHighlight' in changes) {
      this.updateColor(this.appStockHighlight);
    }
  }

  private updateColor(stock: number): void {
    let color = 'black';

    if (stock > 20) {
      color = 'green';
    } else if (stock >= 10 && stock <= 20) {
      color = 'orange';
    } else if (stock < 10) {
      color = 'red';
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

}