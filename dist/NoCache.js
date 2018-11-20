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
class CacheWrapper {
    constructor(conf) {
    }
    getKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    getObjKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    saveKey(namespace, key, value, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    deleteKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    getNamespace(namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    deleteNamespace(namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
}
exports.CacheWrapper = CacheWrapper;
//# sourceMappingURL=NoCache.js.map