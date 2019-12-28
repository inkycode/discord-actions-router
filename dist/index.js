"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RouterFactory = __importStar(require("./router/impl/RouterFactory"));
exports.RouterFactory = RouterFactory;
var Action_1 = require("./router/decorators/Action");
exports.Action = Action_1.Action;
