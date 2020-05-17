import { HttpResponse } from "@angular/common/http";

export class CacheModel<T> {
    url: string;
    response: T;
    lastRead: number;
}