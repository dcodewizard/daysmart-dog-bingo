import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import type { CardInputMetrics } from './dog-bingo-input.component.types';

export const InitialCardMetrics: CardInputMetrics = {
  cardCount: 0, cardDimension: 0,
};

@Component({
  selector: 'dog-bingo-input',
  templateUrl: './dog-bingo-input.component.html',
  styleUrl: './dog-bingo-input.component.scss'
})
export class DogBingoInputComponent implements OnInit{
  cardCount: number = InitialCardMetrics.cardCount
  cardDimension: number = InitialCardMetrics.cardDimension;

  canGenerateCards: boolean = false;
  @Output() cardGenerateClick = new EventEmitter<CardInputMetrics>();
  
  ngOnInit(): void {
    this.updateCanGenerateCards();
  }

  updateCanGenerateCards() {
    this.canGenerateCards = this.cardCount > 0 && this.cardDimension > 0;
  }

  onCardGenerateClick() {
    if (this.canGenerateCards) {
      const [cardCount, cardDimension] = [this.cardCount, this.cardDimension];
      this.cardGenerateClick.emit({ cardCount, cardDimension });
    }
  }

  onCardInputsChange() {
    this.updateCanGenerateCards();
  }
}
