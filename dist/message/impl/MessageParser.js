"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParsedMessageImpl_1 = require("./ParsedMessageImpl");
function parseMessageContent(prefix, messageContent) {
    var regExp = new RegExp(['^(', prefix, ') ?([^\\s]*) ?(.*)?$'].join(''), 'gi');
    var groups = regExp.exec(messageContent);
    return groups;
}
function parseContentForActionArguments(content) {
    return content !== null ? content.split(' ') : null;
}
function parse(message, prefix) {
    var action = null;
    var actionArguments = null;
    var content = null;
    var groups = parseMessageContent(prefix, message.content);
    if (groups && groups !== null) {
        // groups[0] = whole match
        // groups[1] = prefix
        // groups[2] = actionName
        action = groups[2];
        // groups[3] = arguments as singular string
        content = groups[3] || null;
        actionArguments = parseContentForActionArguments(content);
    }
    return new ParsedMessageImpl_1.ParsedMessageImpl(message, prefix, content, action, actionArguments);
}
exports.parse = parse;
