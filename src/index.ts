import { CacheWrapper } from './CacheWrapper';
import { configureLogger, Logger, logger } from './logger';

export { CacheWrapper } from './CacheWrapper';
export { LocalCache } from './LocalCache';

/** Optional configuration for middleware */
export interface CacheConfiguration {
    /** Set custom logger. Yo can create it from logger wraps-logger library */
    logger?: Logger;
}

/** Cache middleware configuration */
export function configure (cacheType?: CacheWrapper, conf?: CacheConfiguration) {
    // Check for custom logging functions on cache (debug)
    if (conf && conf.logger) {
        configureLogger(conf.logger);
        logger.info('Custom cache logger configured');
    }
    if (cacheType) cache = cacheType;
}

export let cache = new CacheWrapper();
export { logger } from './logger';