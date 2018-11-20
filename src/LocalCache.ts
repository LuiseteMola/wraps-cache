import { CacheWrapper } from "./CacheWrapper";

export class LocalCache implements CacheWrapper{
    private data: any = {};

    constructor() {}

    public async getKey(namespace: string, key: string): Promise<string> {
        if (this.data[namespace]) return this.data[namespace][key];
    }

    public async getObjKey(namespace: string, key: string): Promise<any> {
        return this.getKey(namespace, key);
    }


    public async saveKey(namespace: string, key: string, value: any, options: any = {}): Promise<any> {
        if (!this.data[namespace]) this.data[namespace] = {};
        this.data[namespace].key = value; 
        return;
    }

    public async deleteKey(namespace: string, key: string) {
        if (this.data[namespace]) delete this.data[namespace][key];
        return;
    }

    public async getNamespace(namespace: string) {
        return this.data[namespace];
    }

    public async deleteNamespace(namespace: string) {
        delete this.data[namespace];
        return;
    }
}
