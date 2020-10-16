import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListWordsComponent } from './list-words/list-words.component';
import { ListGameComponent } from './list-game/list-game.component';
import { RegisterWordComponent } from './register-word/register-word.component';



@NgModule({
  declarations: [WelcomeComponent, ListWordsComponent, ListGameComponent, RegisterWordComponent],
  imports: [
    CommonModule
  ],
  exports:[WelcomeComponent,ListWordsComponent,ListGameComponent,RegisterWordComponent]
})
export class ComponentsModule { }
