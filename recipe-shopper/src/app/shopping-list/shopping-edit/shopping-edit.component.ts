import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddButtonClicked(form: NgForm) {
    this.shoppingListService.shoppingItemToAdd.next(
      new Ingredient(form.value.name, form.value.amount)
    );
  }

  onClearButtonClicked(form: NgForm) {
    form.reset();
  }

}
