"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userpatchCommands = exports.dlcCommands = exports.aocCommands = exports.userpatch = exports.dlc = exports.aoc = void 0;
let aoc;
let dlc;
let userpatch;
try {
    // These files don't exist before first compilation in a fresh clone.
    // This ensures it is possible to compile for the first time without TypeScript errors.
    exports.aoc = aoc = require('./generated/lib.aoc');
    exports.dlc = dlc = require('./generated/lib.dlc');
    exports.userpatch = userpatch = require('./generated/lib.userpatch');
}
catch {
    // Ignore errors - these files don't exist before first compilation
}
var lib_aoc_commands_1 = require("./lib.aoc.commands");
Object.defineProperty(exports, "aocCommands", { enumerable: true, get: function () { return lib_aoc_commands_1.definitions; } });
var lib_dlc_commands_1 = require("./lib.dlc.commands");
Object.defineProperty(exports, "dlcCommands", { enumerable: true, get: function () { return lib_dlc_commands_1.definitions; } });
var lib_userpatch_commands_1 = require("./lib.userpatch.commands");
Object.defineProperty(exports, "userpatchCommands", { enumerable: true, get: function () { return lib_userpatch_commands_1.definitions; } });
//# sourceMappingURL=index.js.map