import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGameComponent } from './list-game/list-game.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterWordComponent } from './register-word/register-word.component';
import { ListWordsComponent } from './list-words/list-words.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},
  {path:'game',component:ListGameComponent},
  {path:'save',component:RegisterWordComponent},
  {path:'list',component:ListWordsComponent},
  {path:'**',pathMatch:'full',redirectTo:'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
