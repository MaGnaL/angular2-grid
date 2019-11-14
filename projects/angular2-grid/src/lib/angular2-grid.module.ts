import { NgModule } from '@angular/core';
import { Angular2GridComponent } from './angular2-grid.component';
import { Angular2GridDirective } from './angular2-grid.directive';



@NgModule({
  declarations: [Angular2GridComponent, Angular2GridDirective],
  imports: [
  ],
  exports: [Angular2GridComponent,Angular2GridDirective]
})
export class Angular2GridModule { }
