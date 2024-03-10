import { Input, Component, OnInit } from '@angular/core';
import { DogbreedService } from '../../services/dogbreed/dogbreed.service';

@Component({
  selector: 'dog-bingo-card',
  templateUrl: './dog-bingo-card.component.html',
  styleUrl: './dog-bingo-card.component.scss'
})
export class DogBingoCardComponent implements OnInit {
  dogBreeds: string[] = [];
  @Input() cardDimension?: number;

  constructor(private dogBreedService: DogbreedService) { }

  ngOnInit(): void {
    const breedCount = Math.pow(this.cardDimension!, 2);
    const dogBreeds = this.dogBreedService.getRandomCachedBreeds(breedCount);
    this.dogBreeds = dogBreeds;
  }
}
