import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { RouterLink } from '@angular/router';
import { CutTitlePipe } from '../../pipes/cut-title.pipe';

@Component({
  selector: 'app-category',
  imports: [RouterLink, CutTitlePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  constructor() {}

  @Input() category!:Category

  ngOnInit(): void {}

}