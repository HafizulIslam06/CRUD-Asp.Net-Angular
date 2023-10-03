import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { book } from '../models/book.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class BooksService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { } 

  getAllBooks() : Observable<book[]>
  {
    return this.http.get<book[]>(this.baseApiUrl + '/api/Books');
  }

  addBook(addBookRequest: book) : Observable<book>
  {
    addBookRequest.id='0000-000-000-000-000000';
    return this.http.post<book>(this.baseApiUrl + '/api/Books',addBookRequest);
  }

  getBook(id: string): Observable<book>
  {
    return this.http.get<book>(this.baseApiUrl+'/api/books/' + id);
  }

  updateBook(id: string, UpdateBookRequest: book) : Observable<book>
  {
    return this.http.put<book>(this.baseApiUrl+'/api/books/' + id, UpdateBookRequest);
  }
  deleteBook(id: string) : Observable<book>
  {
    return this.http.delete<book>(this.baseApiUrl+'/api/books/' + id);
  }
}
