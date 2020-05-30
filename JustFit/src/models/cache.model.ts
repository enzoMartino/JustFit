export class CacheModel<T> {
    url: string;
    response: T;
    lastRead: number;
}