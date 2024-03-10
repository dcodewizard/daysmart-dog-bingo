import { Component, OnDestroy, OnInit } from '@angular/core';
import { InitialCardMetrics } from './components/dog-bingo-input/dog-bingo-input.component';
import type { CardInputMetrics } from './components/dog-bingo-input/dog-bingo-input.component.types';
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
  renderMetrics: CardInputMetrics = InitialCardMetrics;
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

  onCardGenerateClick(e: CardInputMetrics) {
    this.renderMetrics = {...e};
  }
}
