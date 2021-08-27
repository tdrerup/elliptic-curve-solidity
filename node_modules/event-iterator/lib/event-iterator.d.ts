export declare type PushCallback<T> = (res: T) => void;
export declare type StopCallback<T> = () => void;
export declare type FailCallback<T> = (err: Error) => void;
export declare type ListenHandler<T> = (push: PushCallback<T>, stop: StopCallback<T>, fail: FailCallback<T>) => void;
export declare type RemoveHandler<T> = (push: PushCallback<T>, stop: StopCallback<T>, fail: FailCallback<T>) => void;
export interface EventIteratorOptions {
    highWaterMark?: number;
}
export declare class EventIterator<T> implements AsyncIterable<T> {
    private listen;
    private remove?;
    private options;
    constructor(listen: ListenHandler<T>, remove?: RemoveHandler<T>, options?: EventIteratorOptions);
    [Symbol.asyncIterator](): AsyncIterator<T>;
}
export default EventIterator;
