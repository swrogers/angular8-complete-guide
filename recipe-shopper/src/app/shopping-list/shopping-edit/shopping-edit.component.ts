import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  @Output() shoppingItemOut = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClicked() {
    this.shoppingItemOut.emit(
      new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    );
  }

  onClearButtonClicked() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
