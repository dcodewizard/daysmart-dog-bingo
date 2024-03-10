import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBingoInputComponent } from './dog-bingo-input.component';

describe('DogBingoInputComponent', () => {
  let component: DogBingoInputComponent;
  let fixture: ComponentFixture<DogBingoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogBingoInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogBingoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
