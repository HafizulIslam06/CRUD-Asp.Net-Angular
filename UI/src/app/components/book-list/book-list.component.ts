import { Component } from '@angular/core';
import { book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books : book[] = [];

  constructor (private BooksService: BooksService) 
  {
    
  }

ngOnInit(): void {
  this.BooksService.getAllBooks()
    .subscribe({
      next: (books) => {
        this.books = books;
        console.log('Books:', this.books);
      },
      error: (response) => {
        console.log('Error:', response);
      }
    });
}


}
