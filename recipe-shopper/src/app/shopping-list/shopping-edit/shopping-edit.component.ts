import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: true}) shoppingForm: NgForm;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddButtonClicked() {
    this.shoppingListService.shoppingItemToAdd.next(
      //new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
      new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount)
    );
  }

  onClearButtonClicked() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
