export class CacheWrapper {

    constructor() {
    }

    public async getKey(namespace: string, key: string): Promise<string> {
        return;
    }

    public async getObjKey(namespace: string, key: string): Promise<any> {
        return;
    }

    public async saveKey(namespace: string, key: string, value: any, options: any = {}): Promise<any> {
        return;
    }

    public async deleteKey(namespace: string, key: string) {
        return;
    }

    public async getNamespace(namespace: string) {
        return;
    }

    public async deleteNamespace(namespace: string) {
        return;
    }
}
