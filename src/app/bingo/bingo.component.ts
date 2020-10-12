import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {bingoMock, Entry} from './bingo.mock';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {
  bingoEntries: Entry[] = bingoMock;

  constructor() {
  }
  ngOnInit(): void {
    const storage = window.localStorage.getItem('bingo');
    if (storage){
      this.bingoEntries = JSON.parse(storage);
    } else {
      this.bingoEntries = this.getBingoEntries(this.bingoEntries);
    }
  }

  public windowPrint(): void {
    window.print();
  }
  public generate(): void {
    window.localStorage.clear();
    this.bingoEntries.forEach(entry => {
      entry.clicked = false;
    });
    this.bingoEntries = this.getBingoEntries(this.bingoEntries);
  }
  public setActive(entry: Entry): void {
    entry.clicked = !entry.clicked;
    window.localStorage.setItem('bingo', JSON.stringify(this.bingoEntries));
  }

  private getBingoEntries(array: Entry[]): Entry[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array.slice(0, 25);
  }

}



