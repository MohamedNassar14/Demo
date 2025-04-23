import { Component } from '@angular/core';
import { SwaggerService } from '../../shared/services/swagger.service';
import { ProductComponent } from '../../shared/components/product/product.component';

@Component({
  selector: 'app-items',
  imports: [ProductComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  constructor(private swagger:SwaggerService) {}
  
  items:any[] = [];
  
    ngOnInit(): void {
      this.swagger.getTrends().subscribe((res)=> {
        this.items = res
      })
    }
}
