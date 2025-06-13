import { Component, Input } from '@angular/core';
import { ZoomDirective } from '../zoom.directive';
import { StockHighlightDirective } from '../stock-highlight.directive';

@Component({
  selector: 'app-cart-card',
  imports: [ZoomDirective,StockHighlightDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartCardComponent {
  showMore:boolean=false;
  @Input() product:any;

}