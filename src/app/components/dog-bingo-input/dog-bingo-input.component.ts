import { Component, Output, EventEmitter, OnInit } from '@angular/core';

export const InitialCardMetricValue = 5;
export type  CardMetricEventValue = [number, number];

@Component({
  selector: 'dog-bingo-input',
  templateUrl: './dog-bingo-input.component.html',
  styleUrl: './dog-bingo-input.component.scss'
})
export class DogBingoInputComponent implements OnInit{
  cardCount: number = InitialCardMetricValue;
  cardDimension: number = InitialCardMetricValue;
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
    this.cardMetricEvent.emit([this.cardCount, this.cardDimension]);
    this.updateCanGenerateCards();
  }
}
