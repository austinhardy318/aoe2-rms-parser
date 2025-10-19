"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildren = getChildren;
exports.getChild = getChild;
exports.getDescendants = getDescendants;
exports.getDescendant = getDescendant;
exports.getTokens = getTokens;
exports.getToken = getToken;
exports.getLastToken = getLastToken;
exports.getChildNodes = getChildNodes;
exports.getChildNode = getChildNode;
exports.getLastChildNode = getLastChildNode;
exports.getNodes = getNodes;
exports.getNode = getNode;
exports.getLastNode = getLastNode;
exports.isToken = isToken;
exports.isNode = isNode;
const descendantsCache = new WeakMap();
function getChildren(node, type) {
    return type ? (node.childrenByType[type] || []) : node.children;
}
function getChild(node, type, orThrow) {
    const children = type ? (node.childrenByType[type] || []) : node.children;
    if (children.length)
        return children[0];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a child '${type || '<any>'}' of '${node.type}'!`);
}
function getDescendants(node, type) {
    let all = [];
    if (descendantsCache.has(node)) {
        all = descendantsCache.get(node) || [];
    }
    else {
        node.children.forEach(x => {
            all.push(x);
            if (isNode(x))
                all.push(...getDescendants(x));
        });
        descendantsCache.set(node, all);
    }
    return type ? all.filter(x => x.type === type) : all;
}
function getDescendant(node, type, orThrow) {
    const all = getDescendants(node, type);
    if (all.length)
        return all[0];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a descendant '${type || '<any>'}' of '${node.type}'!`);
}
function getTokens(node, type) {
    return getDescendants(node, type).filter(isToken);
}
function getToken(node, type, orThrow) {
    const all = getTokens(node, type);
    if (all.length)
        return all[0];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a token '${type || '<any>'}' in '${node.type}'!`);
}
function getLastToken(node, type, orThrow) {
    const all = getTokens(node, type);
    if (all.length)
        return all[all.length - 1];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a token '${type || '<any>'}' in '${node.type}'!`);
}
function getChildNodes(node, type) {
    return getChildren(node, type).filter(isNode);
}
function getChildNode(node, type, orThrow) {
    const all = getChildNodes(node, type);
    if (all.length)
        return all[0];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a node '${type || '<any>'}' of '${node.type}'!`);
}
function getLastChildNode(node, type, orThrow) {
    const all = getChildNodes(node, type);
    if (all.length)
        return all[all.length - 1];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a node '${type || '<any>'}' of '${node.type}'!`);
}
function getNodes(node, type) {
    return getDescendants(node, type).filter(isNode);
}
function getNode(node, type, orThrow) {
    const all = getNodes(node, type);
    if (all.length)
        return all[0];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a node '${type || '<any>'}' of '${node.type}'!`);
}
function getLastNode(node, type, orThrow) {
    const all = getNodes(node, type);
    if (all.length)
        return all[all.length - 1];
    if (!orThrow)
        return undefined;
    throw new Error(`Cannot find a node '${type || '<any>'}' of '${node.type}'!`);
}
function isToken(x) {
    return !('children' in x);
}
function isNode(x) {
    return 'children' in x;
}
//# sourceMappingURL=treeHelpers.js.map