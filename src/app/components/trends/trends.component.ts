import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../../shared/services/swagger.service';
import { ProductComponent } from "../../shared/components/product/product.component";

@Component({
  selector: 'app-trends',
  imports: [ProductComponent],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.css'
})
export class TrendsComponent implements OnInit {


  constructor(private swagger:SwaggerService) {}

  trends:any[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.swagger.getTrends().subscribe((res)=> {
      this.trends = res
    })
  }
 
}
