import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[libAngular2Grid]'
})
export class Angular2GridDirective {

  constructor(el:ElementRef) {
    console.debug('el:',el);
  }

}
