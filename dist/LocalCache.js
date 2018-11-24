"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class LocalCache {
    constructor() {
        this.data = {};
    }
    getKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.data[namespace])
                return this.data[namespace][key];
        });
    }
    getObjKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getKey(namespace, key);
        });
    }
    saveKey(namespace, key, value, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.data[namespace])
                this.data[namespace] = {};
            this.data[namespace].key = value;
            return;
        });
    }
    deleteKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.data[namespace])
                delete this.data[namespace][key];
            return true;
        });
    }
    getNamespace(namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data[namespace];
        });
    }
    deleteNamespace(namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.data[namespace];
            return;
        });
    }
}
exports.LocalCache = LocalCache;
//# sourceMappingURL=LocalCache.js.map