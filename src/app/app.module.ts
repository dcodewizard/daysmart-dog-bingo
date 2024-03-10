import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogBingoInputComponent } from './components/dog-bingo-input/dog-bingo-input.component';
import { DogBingoCardComponent } from './components/dog-bingo-card/dog-bingo-card.component';
import { DogBingoTileComponent } from './components/dog-bingo-card/dog-bingo-tile/dog-bingo-tile.component';
import { AllowNumbersUptoDirective } from './directives/allow-numbers-upto.directive';

@NgModule({
  declarations: [
    AppComponent,
    DogBingoInputComponent,
    DogBingoCardComponent,
    DogBingoTileComponent,
    AllowNumbersUptoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
