import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentQuestionComponent } from './Components/current-question/current-question.component';
import { InteractiveLiComponent } from './Components/interactive-li/interactive-li.component';
import { QuestionsHistoryComponent } from './Components/questions-history/questions-history.component';
import { ButtonAnimationDirective } from './Directives/button-animation.directive';


@NgModule({
  declarations: [
    AppComponent,
    CurrentQuestionComponent,
    InteractiveLiComponent,
    QuestionsHistoryComponent,
    ButtonAnimationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
