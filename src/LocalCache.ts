import { CacheWrapper } from "./CacheWrapper";

export class LocalCache implements CacheWrapper{
    private data: any = {};

    public async getKey(namespace: string, key: string): Promise<string> {
        if (this.data[namespace]) return this.data[namespace][key];
    }

    public async getObjKey(namespace: string, key: string): Promise<any> {
        return this.getKey(namespace, key);
    }


    public async saveKey(namespace: string, key: string, value: any, options: any = {}): Promise<boolean> {
        if (!this.data[namespace]) this.data[namespace] = {};
        this.data[namespace].key = value;
        return;
    }

    public async deleteKey(namespace: string, key: string): Promise<boolean> {
        if (this.data[namespace]) delete this.data[namespace][key];
        return true;
    }

    public async getNamespace(namespace: string): Promise<any> {
        return this.data[namespace];
    }

    public async deleteNamespace(namespace: string): Promise<any> {
        delete this.data[namespace];
        return;
    }
}
