import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description : new FormControl()
  });
  id: number;
  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.id = id;
      this.getBookById(id);
    });
  }
  ngOnInit() {
  }
  getBookById(id) {
    this.bookService.findById(id).subscribe((book) => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
  get idControl() {
    return this.bookForm.get('id');
  }

  update(id) {
    const book = this.bookForm.value;
    this.bookService.update(id, book).subscribe(() => {
      alert('Thành công');
    });
  }
}
