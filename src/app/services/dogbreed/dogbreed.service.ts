import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, of, catchError, } from 'rxjs';
import { shuffle, slice } from 'lodash'

import type { ListAllBreedsResponse } from './dogbreed.service.types';

export const DogBreedsAPIBaseURL = 'https://dog.ceo/api';

@Injectable({
  providedIn: 'root'
})
export class DogbreedService {
  private cachedDogBreeds: Array<string> = [];

  constructor(private http: HttpClient) { }

  public fetchAndCacheBreeds(): Observable<Error | null> {
    const targetURL = this.getAPIEndpointFor(`breeds/list/all`);
    return this.http.get<ListAllBreedsResponse>(targetURL).pipe(
      map(response => Object.keys(response.message)),
      tap(response => this.setCachedDogBreeds(response)),
      map(r => null),
      catchError(error => of(error as Error))
    );
  }

  public getRandomCachedBreeds(breedCount: number): Array<string> {
    if (this.cachedDogBreeds.length < breedCount) {
      const totalCount = this.cachedDogBreeds.length;
      const message = `Requested breed count must not be greater than ${totalCount}`;
      throw new Error(message);
    }

    const shuffled = shuffle(this.cachedDogBreeds);
    return slice(shuffled, 0, breedCount); 
  }

  private setCachedDogBreeds(breeds: string[]) {
    this.cachedDogBreeds = breeds;
  }

  private getAPIEndpointFor(path: string): string {
    return `${DogBreedsAPIBaseURL}/${path}`;
  }
}
