import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description : new FormControl()
  });
  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getBookById(id);
    });
  }

  ngOnInit() {
  }

  private getBookById(id) {
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

  delete() {
    this.bookService.delete(this.idControl.value).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
    console.error(error); });
  }
}
