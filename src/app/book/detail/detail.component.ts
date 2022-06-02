import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
    const id = paramMap.get('id');
    // @ts-ignore
    this.id = id;
    this.getBookById(id);
  });
}
  ngOnInit() {
  }

  getBookById(id) {
    return this.bookService.findById(id).subscribe((book) => {
      this.book = book;
    });
  }
}
