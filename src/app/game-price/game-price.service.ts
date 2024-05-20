import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export interface Game {
  internalName: string,
  title: string,
  metacriticLink: string,
  dealID: string,
  storeID: string,
  gameID: string,
  salePrice: number,
  normalPrice: number,
  isOnSale: boolean,
  savings: number,
  metacriticScore: number,
  steamRatingText: string,
  steamRatingPercent: number,
  steamRatingCount: number,
  steamAppID: string,
  releaseDate: string,
  lastChange: string,
  dealRating: number,
  thumb: string
}

@Injectable({
  providedIn: 'root'
})
export class GamePriceService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllDeals(): Observable<Game[]> {
    const deals = this.httpClient.get<Game[]>('https://www.cheapshark.com/api/1.0/deals');
    return deals;
  }
}
