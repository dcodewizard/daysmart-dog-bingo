import { Input, Component } from '@angular/core';

@Component({
  selector: 'dog-bingo-tile',
  templateUrl: './dog-bingo-tile.component.html',
  styleUrl: './dog-bingo-tile.component.scss'
})
export class DogBingoTileComponent {
  @Input() breedName?: string
}
