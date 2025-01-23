import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {
  @HostBinding('style.fontSize') fontSize = '20px';
}
