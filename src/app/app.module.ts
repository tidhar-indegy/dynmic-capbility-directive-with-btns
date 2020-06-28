import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RedDirective } from './capabilities/red/red.directive';
import { RedComponent } from './capabilities/red/red.component';
import { BlueComponent } from './capabilities/blue/blue.component';
import { BlueDirective } from './capabilities/blue/blue.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RedDirective, RedComponent, BlueComponent, BlueDirective ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
