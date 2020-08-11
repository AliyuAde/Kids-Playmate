import { BooksService } from './books.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';

import { Book } from './book.model';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  books1: Book[];
  books2: Book[];
  books3: Book[];
  books4: Book[];
  books5: Book[];
  books6: Book[];




  constructor(private booksService: BooksService) {}

  ngOnInit(){
    this.books1 = this.booksService.getBookByClass('1');
    this.books2 = this.booksService.getBookByClass('2');
    this.books3 = this.booksService.getBookByClass('3');
    this.books4 = this.booksService.getBookByClass('4');
    this.books5 = this.booksService.getBookByClass('5');
    this.books6 = this.booksService.getBookByClass('6');
  }









 /* openLocalPdf(bookName: string, titles: string){

    let filePath = this.file.applicationDirectory + 'www/assets/';

    if(this.platform.is('android')){
      let fakeName = Date.now();
      this.file.copyFile(filePath, bookName+'.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf');
      });
    }else{
      const options: DocumentViewerOptions  = {
        title: 'Primary 1 First Term'
       };
       this.documents.viewDocument(`${filePath}/Antum.pdf`, 'application/pdf', options);
     
    }
  }

openPdfs(bookName: string, titles: string){
  //console.log(bookLink);

 const options: DocumentViewerOptions  = {
   title: titles
  };
  this.documents.viewDocument( 'assets/'+bookName+'.pdf', 'application/pdf', options);
}


openPdf(bookName: string, titles: string){
  //console.log(bookLink);

 const options: DocumentViewerOptions  = {
  title: titles
  };
  let filePath = this.file.applicationDirectory + 'www/assets';

  if(this.platform.is('android')){
    let fakeName = Date.now();
    this.file.copyFile(filePath, +bookName+'.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
      this.documents.viewDocument(result.nativeURL, 'application/pdf', options);
    });
  }else{
  
     this.documents.viewDocument(`${filePath}/Antum.pdf`, 'application/pdf', options);
   
  }
}

openPdfAll(){
 var url = "assets/Antum.pdf";
 this.previewAnyFile.preview(url).then(()=>{},(err)=>{
   alert(JSON.stringify(err));
 })
}*/

}
