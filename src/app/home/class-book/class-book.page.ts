import { Component, OnInit } from '@angular/core';
import { Book } from './../book.model';
import { BooksService } from './../books.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-class-book',
  templateUrl: './class-book.page.html',
  styleUrls: ['./class-book.page.scss'],
})
export class ClassBookPage implements OnInit {
  loadedClass: Book[];

  constructor(private route:ActivatedRoute, private booksService:BooksService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

    
      if (!paramMap.has('id')){
        return
      }
      const classId = paramMap.get('id');
      this.loadedClass = this.booksService.getBookByClass(classId);
    });
  }
   

}
