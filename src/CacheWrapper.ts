export class CacheWrapper {

    public async getKey(namespace: string, key: string): Promise<string> {
        return;
    }

    public async getObjKey(namespace: string, key: string): Promise<any> {
        return;
    }

    public async saveKey(namespace: string, key: string, value: any, options: any = {}): Promise<boolean> {
        return;
    }

    public async deleteKey(namespace: string, key: string): Promise<boolean> {
        return;
    }

    public async getNamespace(namespace: string): Promise<any> {
        return;
    }

    public async deleteNamespace(namespace: string): Promise<any> {
        return;
    }
}
