import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {error} from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe((data) => {this.books = data; },
      // tslint:disable-next-line:no-shadowed-variable
      (error) => {console.log(error); });
  }
}
