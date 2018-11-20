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
const RedisCreate_1 = require("./redis/RedisCreate");
const RedisUtils_1 = require("./redis/RedisUtils");
class RedisCache {
    constructor(conf) {
        this.appKey = process.env.REDIS_APP_KEY;
        this.client = RedisCreate_1.redisCreate();
    }
    getAppNamespace(namespace) {
        return `${this.appKey}-${namespace}`;
    }
    /**
     * String/Object to internal format conversion
     * Encapsulates value into an internal object type (RedisValue)
     * @param value Value to be saved
     * @param opts Options (currently only expiresAt)
     */
    setRedisValue(value, opts) {
        let expirationDate = false;
        if (opts.expiresAt)
            expirationDate = Date.now() + (opts.expiresAt * 1000);
        return JSON.stringify({
            value: RedisUtils_1.convertToString(value),
            expirationDate: expirationDate
        });
    }
    /**
     * Decode REDIS custom value structure into real value
     * Checks for expiration
     * @param namespace Value namespace
     * Will be used if key is expired
     * @param key Value Key
     * Will be used if key is expired
     * @param val Value
     */
    getRedisValues(namespace, key, val) {
        logger.silly(`Value from redis: ${val}`);
        if (val === null)
            return val;
        const formatedVal = JSON.parse(val);
        if (formatedVal.expirationDate && formatedVal.expirationDate < Date.now()) {
            logger.debug('Expired value. Delete key and return null');
            this.deleteKey(namespace, key);
            // tslint:disable-next-line:no-null-keyword
            return null;
        }
        return formatedVal.value;
    }
    /**
     * Performs HGET over Redis
     * Gets a previously saved key
     *
     * @param namespace Hash key to use
     * @param key Key name
     */
    getKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.client.hget(this.getAppNamespace(namespace), key);
            logger.silly(`getKey Value: ${value}`);
            return this.getRedisValues(namespace, key, value);
        });
    }
    /**
     * Performs HGET over Redis and parses result to a Javascript Object type
     *
     * @param namespace Hash key
     * @param key Key name
     */
    getObjKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const stringValue = yield this.getKey(namespace, key);
            return RedisUtils_1.convertToJson(stringValue);
        });
    }
    /**
     * Performs HSET over REDIS
     * @param namespace Hash key
     * @param key Key name
     * @param value Value to save. Can be any type except function
     * If param is an object type, it will br parsed automatically
     * @param options Saving options (RedisKeyOpts type)
     */
    saveKey(namespace, key, value, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.silly('saveKey');
            const returnedVal = yield this.client.hset(this.getAppNamespace(namespace), key, this.setRedisValue(value, options));
            logger.silly(`saveKey Returned: ${returnedVal}`);
            return returnedVal;
        });
    }
    /**
     * Performs HDEL over REDIS
     * @param namespace hash key
     * @param key Key name
     */
    deleteKey(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnedVal = yield this.client.hdel(this.getAppNamespace(namespace), key);
            logger.silly(`deleteKey Returned: ${returnedVal}`);
            return returnedVal;
        });
    }
    /**
     * Performs HGETALL over REDIS
     * @param namespace Namespace to retrieve
     */
    getNamespace(namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = yield this.client.hgetall(this.getAppNamespace(name));
            logger.silly('getNamespace returned', values);
            return values;
        });
    }
    /**
     * Performs DEL over REDIS (deletes all namespace entries)
     * @param namespace Namespace to delete
     */
    deleteNamespace(namespace) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnedVal = yield this.client.del(this.getAppNamespace(namespace));
            logger.silly(`deleteNamespace returned ${returnedVal}`);
        });
    }
}
exports.RedisCache = RedisCache;
//# sourceMappingURL=RedisCache.js.map