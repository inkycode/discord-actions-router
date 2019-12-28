"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParsedMessageImpl = /** @class */ (function () {
    function ParsedMessageImpl(message, prefix, content, action, actionArguments) {
        this.message = message;
        this.prefix = prefix;
        this.content = content;
        this.action = action;
        this.actionArguments = actionArguments;
    }
    Object.defineProperty(ParsedMessageImpl.prototype, "Message", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParsedMessageImpl.prototype, "Prefix", {
        get: function () {
            return this.prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParsedMessageImpl.prototype, "Action", {
        get: function () {
            return this.action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParsedMessageImpl.prototype, "ActionArguments", {
        get: function () {
            return this.actionArguments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParsedMessageImpl.prototype, "Content", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    return ParsedMessageImpl;
}());
exports.ParsedMessageImpl = ParsedMessageImpl;
