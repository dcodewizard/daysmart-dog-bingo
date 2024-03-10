import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import type { CardMetricEventValue } from './dog-bingo-input.component.types';

export const InitialCardMetrics: CardMetricEventValue = {
  cardCount: 1, cardDimension: 5,
};

@Component({
  selector: 'dog-bingo-input',
  templateUrl: './dog-bingo-input.component.html',
  styleUrl: './dog-bingo-input.component.scss'
})
export class DogBingoInputComponent implements OnInit{
  cardCount: number = InitialCardMetrics.cardCount
  cardDimension: number = InitialCardMetrics.cardDimension;
  @Output() cardMetricEvent = new EventEmitter<CardMetricEventValue>();

  canGenerateCards: boolean = false;
  @Output() cardGenerateClick = new EventEmitter();
  
  ngOnInit(): void {
    this.updateCanGenerateCards();
  }

  updateCanGenerateCards() {
    this.canGenerateCards = this.cardCount > 0 && this.cardDimension > 0;
  }

  onCardGenerateClick() {
    if (this.canGenerateCards) {
      this.cardGenerateClick.emit();
    }
  }

  onCardMetricsEvent() {
    const [cardCount, cardDimension] = [this.cardCount, this.cardDimension];
    this.cardMetricEvent.emit({ cardCount, cardDimension });
    this.updateCanGenerateCards();
  }
}
