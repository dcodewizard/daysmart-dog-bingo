import { Input, Component } from '@angular/core';

export const MAXIMUM_LENGTH = 7;

@Component({
  selector: 'dog-bingo-tile',
  templateUrl: './dog-bingo-tile.component.html',
  styleUrl: './dog-bingo-tile.component.scss'
})
export class DogBingoTileComponent {
  @Input() breedName?: string
  
  getFullBreedName(): string {
    return this.breedName || "";
  }

  widthCorrectedName(): string {
    return this.breedName!.length > MAXIMUM_LENGTH
      ? this.breedName!.slice(0, MAXIMUM_LENGTH) + '...'
      : this.breedName!;
  }
}
