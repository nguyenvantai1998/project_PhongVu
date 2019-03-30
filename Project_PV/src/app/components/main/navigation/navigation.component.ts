import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  public category: {};

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.showCategory();
  }

  showCategory(){
    this.categoryService.getActiveCategory().subscribe(data=>{
      this.category = data;
    });
  }

}
