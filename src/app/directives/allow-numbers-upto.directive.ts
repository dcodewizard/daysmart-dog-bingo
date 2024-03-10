import { Directive, HostListener, Input } from '@angular/core';

export const DefaultUpperLimit = 100;

@Directive({
  selector: '[allowNumbersUpto]'
})
export class AllowNumbersUptoDirective {
  @Input() upto !: number; 

  constructor() { }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const upperLimit = this.upto || DefaultUpperLimit;
    const regex = new RegExp(`^[0-${upperLimit}]$`); 
    if (!regex.test(input.value)) {
      input.value = '';
    }
  }
}
