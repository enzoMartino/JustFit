export class GenericMultipleApiResponseModel<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}