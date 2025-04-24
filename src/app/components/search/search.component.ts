import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../shared/services/swagger.service';
import { Product } from '../../shared/models/product';
import { ProductComponent } from '../../shared/components/product/product.component';
import { SearchPipe } from '../../shared/search.pipe';

@Component({
  selector: 'app-search',
  imports: [ProductComponent, SearchPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private swagger:SwaggerService) {}

  products:Product[] = []
  term:string = '';
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.swagger.userSearch.subscribe((res)=> {
      this.term = res
    })
    this.swagger.getProducts().subscribe((res)=> {
      this.products = res
    })
  }

}
