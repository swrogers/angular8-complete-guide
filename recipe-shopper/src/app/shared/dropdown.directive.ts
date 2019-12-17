import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') menuShown = false;

  constructor() {}

  @HostListener('click') onClick() {
    this.menuShown = !this.menuShown;
  }
}
