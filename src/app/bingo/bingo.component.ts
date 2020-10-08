import { Component, OnInit } from '@angular/core';
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
      this.bingoEntries = this.getBingoEntries(this.bingoEntries);
    }

    public windowPrint(): void {
      window.print();
    }
    public generate(): void {
      this.bingoEntries.forEach(entry => {
        entry.clicked = false;
      });
      this.bingoEntries = this.getBingoEntries(this.bingoEntries);
    }
    public setActive(entry: Entry): void {
      entry.clicked = !entry.clicked;
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



