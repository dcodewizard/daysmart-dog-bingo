import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, of, catchError,  } from 'rxjs';

import type { ListAllBreedsResponse } from './dogbreed.service.types';

export const DogBreedsAPIBaseURL = 'https://dog.ceo/api';

@Injectable({
  providedIn: 'root'
})
export class DogbreedService {
  private cachedDogBreeds: Array<string> = [];

  constructor(private http: HttpClient) { }

  public getCachedDogBreeds(): string[] {
    return this.cachedDogBreeds;
  }

  public fetchAndCacheBreeds(): Observable<Error|null> {
    const targetURL = this.getAPIEndpointFor(`breeds/list/all`);
    return this.http.get<ListAllBreedsResponse>(targetURL).pipe(
      map(response => Object.keys(response.message)),
      tap(response => this.setCachedDogBreeds(response)),
      map(r => null),
      catchError(error => of(error as Error))
    );
  }

  private setCachedDogBreeds(breeds: string[]) {
    this.cachedDogBreeds = breeds;
  }

  private getAPIEndpointFor(path: string): string {
    return `${DogBreedsAPIBaseURL}/${path}`;
  }
}
