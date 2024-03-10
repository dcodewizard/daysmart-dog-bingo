import { Input, Component, OnInit, OnChanges } from '@angular/core';
import { DogbreedService } from '../../services/dogbreed/dogbreed.service';

@Component({
  selector: 'dog-bingo-card',
  templateUrl: './dog-bingo-card.component.html',
  styleUrl: './dog-bingo-card.component.scss'
})
export class DogBingoCardComponent implements OnInit,OnChanges {
  dogBreeds: string[] = [];
  @Input() cardDimension?: number;
  @Input() cardCount?: number;

  constructor(private dogBreedService: DogbreedService) { }

  ngOnInit(): void {
    this.populateBreeds();
  }

  ngOnChanges(): void {
    this.populateBreeds();
  }

  populateBreeds() {
    const breedCount = Math.pow(this.cardDimension!, 2);
    const dogBreeds = this.dogBreedService.getRandomCachedBreeds(breedCount);
    this.dogBreeds = dogBreeds;
  }
}
