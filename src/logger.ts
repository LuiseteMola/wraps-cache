import { Logger, logger as defaultLogger } from 'wraps-logger';

export function configureLogger (customLogger: Logger) {
    this.logger = customLogger;
}
export let logger: Logger = defaultLogger;
export { Logger } from 'wraps-logger';