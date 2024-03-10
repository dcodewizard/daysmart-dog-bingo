import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBingoCardComponent } from './dog-bingo-card.component';

describe('DogBingoCardComponent', () => {
  let component: DogBingoCardComponent;
  let fixture: ComponentFixture<DogBingoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogBingoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogBingoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
