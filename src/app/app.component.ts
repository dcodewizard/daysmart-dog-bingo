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
  title = 'Dog Bingo';
  renderMetrics: CardInputMetrics = InitialCardMetrics;
  renderSequence: Array<number> = [];
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

  onCardGenerateClick(e: CardInputMetrics) {
    this.renderMetrics = {...e};
    this.renderSequence = range(0, this.renderMetrics.cardCount);
  }
}
