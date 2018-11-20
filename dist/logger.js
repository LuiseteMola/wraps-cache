"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wraps_logger_1 = require("wraps-logger");
function configureLogger(customLogger) {
    this.logger = customLogger;
}
exports.configureLogger = configureLogger;
exports.logger = wraps_logger_1.logger;
//# sourceMappingURL=logger.js.map