import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/book.service';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any;
  title: string;
  currentPage: number = 1;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    let books = this.bookService.getBooks().subscribe(books => (this.books = books));
  }

  handleFilter() {
    this.bookService.getBooks({title: this.title}).subscribe(books => (this.books = books));
  }
}
