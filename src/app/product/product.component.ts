import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ZoomDirective } from '../zoom.directive';
import { CommonModule } from '@angular/common';
import { StockHighlightDirective } from '../stock-highlight.directive';

@Component({
  selector: 'app-product-card',
  imports: [ZoomDirective, CommonModule, StockHighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductCardComponent {
  showMore: boolean = false;
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();
  
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
  toggleDescription() {
    this.showMore = !this.showMore;
  }
}