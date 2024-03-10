import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBingoTileComponent } from './dog-bingo-tile.component';

describe('DogBingoTileComponent', () => {
  let component: DogBingoTileComponent;
  let fixture: ComponentFixture<DogBingoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogBingoTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogBingoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
