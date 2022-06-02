import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './book/list/list.component';
import {CreateComponent} from './book/create/create.component';


const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
