import { Component, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor() {}

  @Input() product!:Product;
  
  ngOnInit(): void {}

}
