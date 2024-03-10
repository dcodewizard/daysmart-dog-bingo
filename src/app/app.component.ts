import { Component } from '@angular/core';
import { CardMetricEventValue, InitialCardMetricValue } from './components/dog-bingo-input/dog-bingo-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'daysmart-dog-bingo';
  cardMetrics: [number, number] = [InitialCardMetricValue, InitialCardMetricValue];

  onCardMetricEvent(value: CardMetricEventValue) {
    this.cardMetrics = value;
  }

  onCardGenerateClick() {
    console.log("card generate button clicked");
  }
}
