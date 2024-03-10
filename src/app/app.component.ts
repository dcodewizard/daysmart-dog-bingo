import { Component, OnDestroy, OnInit } from '@angular/core';
import { InitialCardMetrics } from './components/dog-bingo-input/dog-bingo-input.component';
import type { CardMetricEventValue } from './components/dog-bingo-input/dog-bingo-input.component.types';
import { DogbreedService } from './services/dogbreed/dogbreed.service';
import { Subscription } from 'rxjs';
import { range } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'daysmart-dog-bingo';
  cardMetrics: CardMetricEventValue = InitialCardMetrics;
  renderMetrics: CardMetricEventValue = InitialCardMetrics;
  subscription?: Subscription;

  constructor(private dogBreedsService: DogbreedService) {}

  ngOnInit(): void {
    this.subscription = this.dogBreedsService
      .fetchAndCacheBreeds()
      .subscribe(error => console.error(error));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCardRenderSequence() {
    return range(0, this.renderMetrics.cardCount);
  }

  onCardMetricEvent(value: CardMetricEventValue) {
    this.cardMetrics = value;
  }

  onCardGenerateClick() {
    this.renderMetrics = {...this.cardMetrics};
  }
}
