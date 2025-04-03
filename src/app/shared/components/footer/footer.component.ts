import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor() {}

  isLoading:boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }

}