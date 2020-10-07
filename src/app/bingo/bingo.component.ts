import { Component, OnInit } from '@angular/core';
import {bingoMock} from './bingo.mock';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {
  bingoEntries: string[];

    constructor() {
    }
  ngOnInit(): void {
    this.bingoEntries = getBingoEntries(bingoMock);
    }
}

function getBingoEntries(array): string[] {
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
