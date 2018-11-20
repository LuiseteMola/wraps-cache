"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CacheWrapper_1 = require("./CacheWrapper");
const logger_1 = require("./logger");
/** Cache middleware configuration */
function configure(cacheType, conf) {
    // Check for custom logging functions on cache (debug)
    if (conf && conf.logger) {
        logger_1.configureLogger(conf.logger);
        logger_1.logger.info('Custom cache logger configured');
    }
    if (cacheType)
        exports.cache = cacheType;
}
exports.configure = configure;
exports.cache = new CacheWrapper_1.CacheWrapper();
//# sourceMappingURL=index.js.map