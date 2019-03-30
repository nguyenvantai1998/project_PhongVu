import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit{

  public category: Category;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.categoryService.getActiveCategory().subscribe(data => {
      this.category = data;
    })
  }

  onDeactive(id: string) {
    this.categoryService.getIdCategoryDetail(id).subscribe(category => {
      this.category = category;
      this.categoryService.deactiveCategoryService(this.category).subscribe(data => {
        this.loadCategory();
      })
    })
  }

}
