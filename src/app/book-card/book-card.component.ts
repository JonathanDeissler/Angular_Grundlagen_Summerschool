import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() content!: Book;
  @Output() detailClick = new EventEmitter<Book>();

  customStyle = {
    color: 'darkgreen'
  };

  ngOnInit(): void {
  }

  handleDetailClick(click: MouseEvent) {
    click.preventDefault();
    this.detailClick.emit(this.content)
    console.log('Clicked Detail-Link', click)
  }
}
