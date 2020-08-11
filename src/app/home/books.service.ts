import { Injectable } from '@angular/core';

import { Book } from './book.model';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
   
  books: Book[] = [
    {
      id: '1',
      title: 'Basic Agriculture',
      imgLink: 'assets/images/1/agric-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/agric-1.pdf'

    },
    {
      id: '2',
      title: 'Alawiye Iwe Kinni',
      imgLink: 'assets/images/1/alawiye-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/alawiye-1.pdf'

    },
    {
      id: '3',
      title: 'Basic Social Studies',
      imgLink: 'assets/images/1/bss-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/bss-1.pdf'

    },
    {
      id: '4',
      title: 'Basic Science & Technology',
      imgLink: 'assets/images/1/bst-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/bst-1.pdf'

    },
    {
      id: '5',
      title: 'Creative and Cultural Art',
      imgLink: 'assets/images/1/cca-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/cca-1.pdf'

    },
    {
      id: '6',
      title: 'Christian Religious Studies',
      imgLink: 'assets/images/1/crk-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/crk-1.pdf'

    },
    {
      id: '7',
      title: 'Civic Education',
      imgLink: 'assets/images/1/cvc-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/cvc-1.pdf'

    },
    {
      id: '8',
      title: 'French Studies',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/fcs-1.pdf'

    },
    {
      id: '9',
      title: 'New Macimillan Mathematics',
      imgLink: 'assets/images/1/nmm-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/nmm-1.pdf'

    },
    {
      id: '10',
      title: 'Nigerian Primary English',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/npe-1.pdf'

    },
    {
      id: '11',
      title: 'Physical and Health Education',
      imgLink: 'assets/images/1/phe-1.jpg',
      class: 'Basic 1',
      classId: '1',
      bookLink: '../../assets/books/1/phe-1.pdf'

    },





    {
      id: '12',
      title: 'Alawiye Iwe Keji',
      imgLink: 'assets/images/2/alawiye-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/alawiye-2.pdf'

    },
    {
      id: '13',
      title: 'Basic Social Studies',
      imgLink: 'assets/images/2/bss-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/bss-2.pdf'

    },
    {
      id: '14',
      title: 'Basic Science & Technology',
      imgLink: 'assets/images/2/bst-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/bst-2.pdf'

    },
    {
      id: '15',
      title: 'Creative and Cultural Art',
      imgLink: 'assets/images/2/cca-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/cca-2.pdf'

    },
    {
      id: '16',
      title: 'Christian Religious Studies',
      imgLink: 'assets/images/2/crk-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/crk-2.pdf'

    },
    {
      id: '17',
      title: 'Civic Education',
      imgLink: 'assets/images/2/cvc-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/cvc-2.pdf'

    },
    {
      id: '18',
      title: 'French Studies',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/fcs-2.pdf'

    },
    {
      id: '19',
      title: 'New Macimillan Mathematics',
      imgLink: 'assets/images/2/nmm-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/nmm-2.pdf'

    },
    {
      id: '20',
      title: 'Nigerian Primary English',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/npe-2.pdf'

    },
    {
      id: '21',
      title: 'Physical and Health Education',
      imgLink: 'assets/images/2/phe-2.jpg',
      class: 'Basic 2',
      classId: '2',
      bookLink: '../../assets/books/2/phe-2.pdf'

    },





    {
      id: '22',
      title: 'Basic Agriculture',
      imgLink: 'assets/images/3/agric-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/agric-3.pdf'

    },
    {
      id: '23',
      title: 'Alawiye Iwe Keta',
      imgLink: 'assets/images/3/alawiye-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/alawiye-3.pdf'

    },
    {
      id: '24',
      title: 'Basic Social Studies',
      imgLink: 'assets/images/3/bss-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/bss-3.pdf'

    },
    {
      id: '25',
      title: 'Basic Science & Technology',
      imgLink: 'assets/images/3/bst-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/bst-3.pdf'

    },
    {
      id: '26',
      title: 'Creative and Cultural Art',
      imgLink: 'assets/images/3/cca-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/cca-3.pdf'

    },
    {
      id: '27',
      title: 'Christian Religious Studies',
      imgLink: 'assets/images/3/crk-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/crk-3.pdf'

    },
    {
      id: '28',
      title: 'Civic Education',
      imgLink: 'assets/images/3/cvc-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/cvc-3.pdf'

    },
    {
      id: '29',
      title: 'French Studies',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/fcs-3.pdf'

    },
    {
      id: '30',
      title: 'New Macimillan Mathematics',
      imgLink: 'assets/images/3/nmm-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/nmm-3.pdf'

    },
    {
      id: '31',
      title: 'Nigerian Primary English',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/npe-3.pdf'

    },
    {
      id: '32',
      title: 'Physical and Health Education',
      imgLink: 'assets/images/3/phe-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/phe-3.pdf'

    },






    
    {
      id: '33',
      title: 'Basic Agriculture',
      imgLink: 'assets/images/4/agric-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/agric-4.pdf'

    },
    {
      id: '34',
      title: 'Alawiye Iwe Kerin',
      imgLink: 'assets/images/4/alawiye-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/alawiye-4.pdf'

    },
    {
      id: '35',
      title: 'Basic Social Studies',
      imgLink: 'assets/images/4/bss-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/bss-4.pdf'

    },
    {
      id: '36',
      title: 'Basic Science & Technology',
      imgLink: 'assets/images/4/bst-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/bst-4.pdf'

    },
    {
      id: '37',
      title: 'Creative and Cultural Art',
      imgLink: 'assets/images/4/cca-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/cca-4.pdf'

    },
    {
      id: '38',
      title: 'Christian Religious Studies',
      imgLink: 'assets/images/4/crk-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/crk-4.pdf'

    },
    {
      id: '39',
      title: 'Civic Education',
      imgLink: 'assets/images/4/cvc-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/cvc-4.pdf'

    },
    {
      id: '40',
      title: 'French Studies',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/fcs-4.pdf'

    },
    {
      id: '41',
      title: 'New Macimillan Mathematics',
      imgLink: 'assets/images/4/nmm-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/nmm-4.pdf'

    },
    {
      id: '42',
      title: 'Nigerian Primary English',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/npe-4.pdf'

    },
    {
      id: '43',
      title: 'Physical and Health Education',
      imgLink: 'assets/images/4/phe-4.jpg',
      class: 'Basic 4',
      classId: '4',
      bookLink: '../../assets/books/4/phe-4.pdf'

    },



    


    {
      id: '44',
      title: 'Basic Agriculture',
      imgLink: 'assets/images/5/agric-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/agric-5.pdf'

    },
    {
      id: '45',
      title: 'Alawiye Iwe Karun',
      imgLink: 'assets/images/5/alawiye-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/alawiye-5.pdf'

    },
    {
      id: '46',
      title: 'Basic Social Studies',
      imgLink: 'assets/images/5/bss-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/bss-5.pdf'

    },
    {
      id: '47',
      title: 'Basic Science & Technology',
      imgLink: 'assets/images/5/bst-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/bst-5.pdf'

    },
    {
      id: '48',
      title: 'Creative and Cultural Art',
      imgLink: 'assets/images/5/cca-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/cca-5.pdf'

    },
    {
      id: '49',
      title: 'Christian Religious Studies',
      imgLink: 'assets/images/5/crk-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/crk-5.pdf'

    },
    {
      id: '50',
      title: 'Civic Education',
      imgLink: 'assets/images/5/cvc-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/cvc-5.pdf'

    },
    {
      id: '51',
      title: 'French Studies',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/fcs-5.pdf'

    },
    {
      id: '52',
      title: 'New Macimillan Mathematics',
      imgLink: 'assets/images/5/nmm-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/nmm-5.pdf'

    },
    {
      id: '53',
      title: 'Nigerian Primary English',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/npe-5.pdf'

    },
    {
      id: '54',
      title: 'Physical and Health Education',
      imgLink: 'assets/images/5/phe-5.jpg',
      class: 'Basic 5',
      classId: '5',
      bookLink: '../../assets/books/5/phe-5.pdf'

    },





    
    {
      id: '55',
      title: 'Basic Agriculture',
      imgLink: 'assets/images/6/agric-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/agric-6.pdf'

    },
    {
      id: '56',
      title: 'Alawiye Iwe Kefa',
      imgLink: 'assets/images/6/alawiye-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/alawiye-6.pdf'

    },
    {
      id: '57',
      title: 'Basic Social Studies',
      imgLink: 'assets/images/6/bss-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/bss-6.pdf'

    },
    {
      id: '58',
      title: 'Basic Science & Technology',
      imgLink: 'assets/images/6/bst-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/bst-6.pdf'

    },
    {
      id: '59',
      title: 'Creative and Cultural Art',
      imgLink: 'assets/images/6/cca-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/cca-6.pdf'

    },
    {
      id: '60',
      title: 'Christian Religious Studies',
      imgLink: 'assets/images/6/crk-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/crk-6.pdf'

    },
    {
      id: '61',
      title: 'Civic Education',
      imgLink: 'assets/images/6/cvc-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/cvc-6.pdf'

    },
    {
      id: '62',
      title: 'French Studies',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/fcs-6.pdf'

    },
    {
      id: '63',
      title: 'New Macimillan Mathematics',
      imgLink: 'assets/images/3/nmm-3.jpg',
      class: 'Basic 3',
      classId: '3',
      bookLink: '../../assets/books/3/nmm-3.pdf'

    },
    {
      id: '64',
      title: 'Nigerian Primary English',
      imgLink: 'assets/grammar.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/npe-6.pdf'

    },
    {
      id: '65',
      title: 'Physical and Health Education',
      imgLink: 'assets/images/6/phe-6.jpg',
      class: 'Basic 6',
      classId: '6',
      bookLink: '../../assets/books/6/phe-6.pdf'

    }




   
  ];

  bookz: Book[];


  constructor() { }

  getAllBooks(){
    return [...this.books];
  }

  
  getBook(bookId: string){
    return {...this.books.find(book => {
      return book.id === bookId;
    })};
  }

  getBookByClass(classId: string){
    return [...this.books.filter(book => {
       return book.classId === classId;
    })];
  }
}
