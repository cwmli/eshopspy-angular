import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

import { USCart } from './uscart';
import { ExchangeCart } from './exchangecart';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class EshopService {

  private eshopUrl = environment.eshopUrl
  private eshopPriceUrl = environment.eshopPriceUrl
  private exchangeUrl = environment.exchangeUrl
  private cartDataUrl = environment.cartDataUrl

  results: USCart[];

  constructor(private http: HttpClient) { 
    this.results = [];
  }

  getUSCarts(limit: string, offset: string, sale: boolean) {
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    if (sale) {
      params = params.append('sale', 'true');
    }

    return this.http.get(this.eshopUrl, {params: params});
  }

  getCartPrice(country: string, offset: string, gameIds: string[]) {
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('country', country);
    //params = params.append('offset', offset);
    //unused for now
    params = params.append('gameIds', gameIds.join(","));
    return this.http.get(this.eshopPriceUrl, {params: params});
  }

  getHistoricalPricing(nsuid: string) {
    return this.http.get(this.cartDataUrl + nsuid);
  }

  getExchangeRates(base: string) {
    return this.http.get<ExchangeCart>(this.exchangeUrl + '?base=' + base, { observe: 'response' });
  }
}
