import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: Book = {};
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description : new FormControl()
  });

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }
  createBook() {
    this.bookService.create(this.bookForm.value).subscribe(() => {
      alert('tạo mới thành công');
      this.bookForm.reset();
    });
  }
}
