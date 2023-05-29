import { CategoryService } from 'src/app/services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  /**
   *
   */
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
  }
  categories: Category[] = [];

  getCategories() {
    return this.categoryService.getAll().subscribe((reponse) => {
      this.categories = reponse;
    });
  }
  changeButton(event: any) {
    var oldActive = document.getElementsByClassName(
      'list-group-item list-group-item-action'
    );
    // depending on your usage you could also replace oldActive by numberButtons
    for (var i = 0; i < oldActive.length; i++) {
      oldActive[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}
