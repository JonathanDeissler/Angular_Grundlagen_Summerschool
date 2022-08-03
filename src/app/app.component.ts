import { Component } from '@angular/core';
import {Book} from "./models/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book List';
   book : Book = {
     title : 'Lord of the Rings',
     author : 'J. R. R. Tolkin',
     abstract : 'The Fellowship of the Ring is the first of three volumes of the epic novel[2] The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. It takes place in the fictional universe of Middle-earth, and was originally published on 29 July 1954 in the United Kingdom. The volume consists of a foreword, in which the author discusses his writing of The Lord of the Rings, a prologue titled "Concerning Hobbits, and other matters", and the main narrative in Book I and Book II'
   }
  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
