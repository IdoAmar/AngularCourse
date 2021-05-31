import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { DisplayColorComponent } from './components/display-color/display-color.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    DisplayColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
