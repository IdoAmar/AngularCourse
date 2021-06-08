import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesPageComponent } from './components/jokes-page/jokes-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {path: 'jokes/:keyword/:index/:type',component: JokesPageComponent},
  {path:'jokes/:keyword/:index',component:JokesPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }