import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.createCategoryAddForm();
  }

  categoryAddForm: FormGroup;

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      categoryName: [''],
    });
  }

  categoryAdd() {
    if (this.categoryAddForm.valid) {
      this.categoryService.add(this.categoryAddForm.value).subscribe(
        (response) => {
          // this.toastrService.success(response., 'Kategori Eklendi');
        },
        (err) => {
          for (let index = 0; index < err.error.Errors.length; index++) {
            this.toastrService.error(
              err.error.Errors[index].ErrorMessage,
              'Hata'
            );
          }
          console.log(err);
        }
      );
    } else {
      this.toastrService.error('Lütfen geçerli değer giriniz', 'Hata');
    }
  }
}
