"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToJson(val) {
    try {
        return JSON.parse(val);
    }
    catch (err) {
        return val;
    }
}
exports.convertToJson = convertToJson;
function convertToString(val) {
    switch (typeof (val)) {
        case 'object': return JSON.stringify(val);
        case 'function': throw new Error('Cannot push functions into REDIS');
        default: return val;
    }
}
exports.convertToString = convertToString;
//# sourceMappingURL=RedisUtils.js.map