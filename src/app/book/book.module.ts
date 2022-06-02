import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksRoutingModule} from './books-routing.module';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DeleteComponent,
    EditComponent,
    CreateComponent,
    DetailComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule
  ]
})
export class BookModule { }
