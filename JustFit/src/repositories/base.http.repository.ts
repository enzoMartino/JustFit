import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CacheProvider } from "../providers/cache/cache.provider";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class BaseHttpRepository {

  constructor(
    private readonly http: HttpClient,
    private cacheProvider: CacheProvider
  ) { }

  makeGetRequestWithCache<T>(endpoint: string, headers: HttpHeaders) {
    const cachedResponse = this.cacheProvider.get<T>(endpoint);
    if (cachedResponse) { return of(cachedResponse); }
    return this.http.get<T>(endpoint, { headers }).pipe(
      tap(response => { if (response) { this.cacheProvider.put<T>(endpoint, response); } })
    );
  }

  makeGetRequestWithoutCache<T>(endpoint: string, headers: HttpHeaders) {
    return this.http.get<T>(endpoint, { headers });
  }

  makePostRequestWithCache<T>(endpoint: string, bodyRequest: Object, headers: HttpHeaders) {
    const cachedResponse = this.cacheProvider.get<T>(endpoint);
    if (cachedResponse) { return of(cachedResponse); }
    return this.http.post<T>(endpoint, bodyRequest, { headers }).pipe(
      tap(response => { if (response) { this.cacheProvider.put<T>(endpoint, response); } })
    );
  }

  makePostRequestWithoutCache<T>(endpoint: string, bodyRequest: Object, headers: HttpHeaders) {
    return this.http.post<T>(endpoint, bodyRequest, { headers });
  }

}
