import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  addBookRequest:book={
    id: '',
    name: '',
    auth: '',
    available: 0,
  };

  constructor(private bookservices : BooksService, private router: Router){}

  ngOnInit():void{

  }

  addBook()
  {
    this.bookservices.addBook(this.addBookRequest)
    .subscribe({
      next: (book)=>{
        this.router.navigate(['books']);
      }
  })
  }

}
