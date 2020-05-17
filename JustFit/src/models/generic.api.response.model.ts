export class GenericApiResponseModel<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}