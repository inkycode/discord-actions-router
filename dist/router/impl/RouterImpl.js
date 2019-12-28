"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageParser = __importStar(require("../../message/impl/MessageParser"));
var RouterImpl = /** @class */ (function () {
    function RouterImpl(client, prefix) {
        this.actions = new Map();
        this.client = client;
        this.prefix = prefix;
    }
    RouterImpl.prototype.routeMessage = function (client) {
        var _this = this;
        return function (message) {
            // Do not route messages sent by the bot client
            if (message.author == client.user)
                return;
            // If message starts with the prefix then we can parse it before sending it to the action handler
            if (message.content.startsWith(_this.prefix)) {
                var parsedMessage = MessageParser.parse(message, _this.prefix);
                // Check if the action has a handler registered
                if (parsedMessage.Action !== null && _this.actions.has(parsedMessage.Action)) {
                    // Get the action handler
                    var actionHandler = _this.actions.get(parsedMessage.Action);
                    // And call it if possible
                    if (actionHandler) {
                        actionHandler(client, parsedMessage);
                    }
                }
            }
        };
    };
    RouterImpl.prototype.registerAction = function (action, actionHandler) {
        if (actionHandler !== undefined) {
            if (!this.actions.has(action)) {
                console.log("registering route " + action);
                this.actions.set(action, actionHandler);
            }
        }
    };
    RouterImpl.prototype.start = function () {
        this.client.on('message', this.routeMessage);
    };
    Object.defineProperty(RouterImpl.prototype, "Actions", {
        get: function () {
            return this.actions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterImpl.prototype, "Prefix", {
        get: function () {
            return this.prefix;
        },
        enumerable: true,
        configurable: true
    });
    return RouterImpl;
}());
exports.RouterImpl = RouterImpl;
