import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent {
  bookdetails : book={
    id: '',
    name: '',
    auth: '',
    available: 0,
  };

  constructor(private route:ActivatedRoute, private bookService: BooksService, private router: Router)
  {

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(
      {
        next: (params)=>{
          const id= params.get('id');

          if(id)
          {
            this.bookService.getBook(id)
            .subscribe({
              next: (Response)=>{
                this.bookdetails=Response;
              }
            })
          }
        }
      }
    )
  }


  updateBook()
  {
    this.bookService.updateBook(this.bookdetails.id, this.bookdetails)
    .subscribe({
      next: (book)=>{
        this.router.navigate(['books']);
    }            
      }
    );
  }

  deleteBook(id: string)
  {
    this.bookService.deleteBook(id)
    .subscribe({
      next: (book)=>{
        this.router.navigate(['books']);
    }            
      }
    );
  }

}
