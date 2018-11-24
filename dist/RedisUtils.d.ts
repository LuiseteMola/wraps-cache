export interface RedisValue {
    value: any;
    expirationDate: number | false;
}
export interface RedisKeyOpts {
    /** Expiration interval (in seconds) */
    expiresAt?: number;
}
export declare function convertToJson(val: string): Object;
export declare function convertToString(val: any): any;
