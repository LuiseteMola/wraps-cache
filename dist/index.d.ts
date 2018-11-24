import { CacheWrapper } from './CacheWrapper';
import { Logger } from 'winston';
export { CacheWrapper } from './CacheWrapper';
export { LocalCache } from './LocalCache';
/** Optional configuration for middleware */
export interface CacheConfiguration {
    /** Set custom logger. Yo can create it from logger wraps-logger library */
    logger?: Logger;
}
/** Cache middleware configuration */
export declare function configure(cacheType?: CacheWrapper, conf?: CacheConfiguration): void;
export declare let cache: CacheWrapper;
export { logger } from './logger';
