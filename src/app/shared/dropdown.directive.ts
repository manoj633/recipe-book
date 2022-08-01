import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

   // The code below closes dropdown only upon clicking on it
  // constructor() { }

  // @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //     this.isOpen = !this.isOpen;
  // }

  // The code below closes dropdown upon clicking anywhere on the screen
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
