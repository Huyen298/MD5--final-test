import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
  {
      path: 'list',
      component: ListComponent
    },
    {
      path: 'create',
      component: CreateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
