import { Injectable } from '@angular/core';
import { CacheModel } from '../../models/cache.model';

@Injectable()
export class CacheProvider {

  private readonly MAX_AGE = 60000 * 10;
  private cache = new Map<string, CacheModel<any>>();

  constructor() { }

  get<T>(url: string): T {
    let response: T;
    const cached = this.cache.get(url) as CacheModel<T>;
    if (cached) {
      const isExpired = cached.lastRead < (Date.now() - this.MAX_AGE);
      if (isExpired) {
        this.cache.delete(url);
      } else {
        response = cached.response;
      }
    }
    return response;
  }

  put<T>(url: string, response: T): void {
    const entry: CacheModel<T> = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);
  }

}
