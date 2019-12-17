import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') menuShown = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) onClick(event: Event) {
    this.menuShown = this.elRef.nativeElement.contains(event.target) ?
      !this.menuShown :
      false;
  }
}
