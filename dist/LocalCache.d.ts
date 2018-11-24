import { CacheWrapper } from "./CacheWrapper";
export declare class LocalCache implements CacheWrapper {
    private data;
    constructor();
    getKey(namespace: string, key: string): Promise<string>;
    getObjKey(namespace: string, key: string): Promise<any>;
    saveKey(namespace: string, key: string, value: any, options?: any): Promise<boolean>;
    deleteKey(namespace: string, key: string): Promise<boolean>;
    getNamespace(namespace: string): Promise<any>;
    deleteNamespace(namespace: string): Promise<any>;
}
