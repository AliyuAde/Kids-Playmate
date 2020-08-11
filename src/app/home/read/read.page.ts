import { Book } from './../book.model';
import { BooksService } from './../books.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  loadedBook: Book;
  zoom: number = 1.0;

  originalSize: boolean = true;

  incZoom(amount: number){
    this.zoom += amount; 

  }
  


  constructor(private route:ActivatedRoute, private booksService:BooksService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

    
      if (!paramMap.has('id')){
        return
      }
      const bookId = paramMap.get('id');
      this.loadedBook = this.booksService.getBook(bookId);
    });
   
  }


 
}
