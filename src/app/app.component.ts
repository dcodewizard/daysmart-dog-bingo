import { Component, OnDestroy, OnInit } from '@angular/core';
import { InitialCardMetrics } from './components/dog-bingo-input/dog-bingo-input.component';
import type { CardMetricEventValue } from './components/dog-bingo-input/dog-bingo-input.component.types';
import { DogbreedService } from './services/dogbreed/dogbreed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'daysmart-dog-bingo';
  cardMetrics: CardMetricEventValue = InitialCardMetrics;
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

  onCardMetricEvent(value: CardMetricEventValue) {
    this.cardMetrics = value;
  }

  onCardGenerateClick() {
    console.log("card generate button clicked");
  }
}
