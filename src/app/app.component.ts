import { Component } from '@angular/core';
import {Book} from "./models/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book List';
  books: Book[] = [
    {
      title : 'Lord of the Rings',
      author : 'J. R. R. Tolkin',
      abstract : 'The Fellowship of the Ring is the first of three volumes of the epic novel[2] The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. It takes place in the fictional universe of Middle-earth, and was originally published on 29 July 1954 in the United Kingdom. The volume consists of a foreword, in which the author discusses his writing of The Lord of the Rings, a prologue titled "Concerning Hobbits, and other matters", and the main narrative in Book I and Book II'
    },
    {
      title : 'Clean Code: Refactoring, Patterns, Testen und Techniken für sauberen Code\n',
      author : 'Robert Cecil Martin',
      abstract : 'Kommentare, Formatierung, StrukturierungFehler-Handling und Unit-TestsZahlreiche Fallstudien, Best Practices, Heuristiken und Code Smells Clean Code - Refactoring, Patterns, Testen und Techniken für sauberen Code'
    },
    {
      title : 'Harry Potter und der Halbblutprinz',
      author : 'J.K. Rowling ',
      abstract : 'Seit Voldemort, der gefährlichste schwarze Magier aller Zeiten, zurückgekehrt ist, herrschen Aufruhr und Gewalt in der magischen Welt. Als Harry Potter und seine Freunde Ron und Hermine zu ihrem sechsten Schuljahr nach Hogwarts kommen, gelten strengste Sicherheitsmaßnahmen in der Zauberschule. Dumbledore will seine Schützlinge vor dem Zugriff des Bösen bewahren. Um Harry zu wappnen, erforscht er mit ihm die Geschichte des Dunklen Lords. Ob auch Harrys Zaubertrankbuch, das früher einem „Halbblutzprinzen“ gehörte, ihm helfen kann?'
    }
  ]

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
}
