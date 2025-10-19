"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCst = toCst;
const lodash_1 = require("lodash");
const treeHelpers_1 = require("../treeHelpers");
function toCst(root) {
    return nodeToCst(root);
}
const cstVisitorMap = {
    Script: parts => simpleCstNode([simpleCstNode(parts, 'StatementsBlock')], 'Script'),
    TopLevelLine: parts => partsToCstNodes(parts),
    TopLevelIf: parts => visitGenericIf(parts),
    TopLevelRandom: parts => visitGenericRandom(parts),
    Section: ([larrow, name, rarrow, statements]) => {
        // Section rule in the grammar is extremely greedy to avoid ambiguity.
        // We're gonna transform it to CST and then see if there's stuff at the end that should be outside.
        const sectionHeader = simpleCstNode([larrow, name, rarrow], 'SectionHeader');
        const statementsBlock = simpleCstNode([statements], 'StatementsBlock');
        // We're gonna check a couple things and see if we need to split the statements
        // moving the last ones to top level.
        let splitIndex = statementsBlock.children.length;
        // To keep grammar fast and unambiguous, we allow TopLevelIf and TopLevelRandom to occur inside Section.
        // Let's check if there're any nodes that contain Section nodes. If there are,
        // then this section should definitely end before the first one.
        const firstTopLevelContainer = [
            ...(0, treeHelpers_1.getChildNodes)(statementsBlock, 'If'),
            ...(0, treeHelpers_1.getChildNodes)(statementsBlock, 'Random')
        ].find(x => (0, treeHelpers_1.getNode)(x, 'Section') !== undefined);
        if (firstTopLevelContainer)
            splitIndex = statementsBlock.children.indexOf(firstTopLevelContainer);
        // Statements at the end that can be outside should go outside.
        for (let i = splitIndex - 1; i >= 0; i--) {
            const node = statementsBlock.children[i];
            if ((0, treeHelpers_1.isToken)(node) && node.type !== 'eol')
                continue;
            if (!(0, treeHelpers_1.isToken)(node) && ['Command', 'ConditionalCommand', 'RandomCommand'].includes(node.type))
                break;
            if (!(0, treeHelpers_1.isToken)(node) && ((0, treeHelpers_1.getNode)(node, 'Command') || (0, treeHelpers_1.getNode)(node, 'ConditionalCommand') || (0, treeHelpers_1.getNode)(node, 'RandomCommand')))
                break;
            splitIndex = i;
        }
        if (splitIndex < statementsBlock.children.length) {
            const statementsOutside = statementsBlock.children.slice(splitIndex);
            const statementsInside = simpleCstNode([statementsBlock.children.slice(0, splitIndex)], 'StatementsBlock');
            return [simpleCstNode([sectionHeader, statementsInside], 'Section'), ...statementsOutside];
        }
        else {
            return simpleCstNode([sectionHeader, statementsBlock], 'Section');
        }
    },
    SectionLine: parts => partsToCstNodes(parts),
    SectionIf: parts => visitGenericIf(parts),
    SectionRandom: parts => visitGenericRandom(parts),
    Command: ([header, body]) => simpleCstNode([
        simpleCstNode(unwrapTokens([header]), 'CommandHeader'),
        body ? nodeToCst(body) : null
    ], 'Command'),
    CommandLevelLine: parts => partsToCstNodes(parts),
    CommandIf: parts => visitGenericIf(parts),
    CommandRandom: parts => visitGenericRandom(parts),
    ConditionalCommand: ([header, body]) => simpleCstNode([
        visitGenericIf([header]),
        nodeToCst(body)
    ], 'ConditionalCommand'),
    RandomCommand: ([header, body]) => simpleCstNode([
        visitGenericRandom([header]),
        nodeToCst(body)
    ], 'RandomCommand'),
    CommandBody: ([comments, ws, lcurly, statements, rcurly]) => simpleCstNode([
        simpleCstNode([comments], 'PreCurlyComments'),
        ws,
        lcurly,
        simpleCstNode([statements], 'StatementsBlock'),
        rcurly
    ], 'CommandBody'),
    Attribute: parts => simpleCstNode(parts, 'Attribute'),
    ConstDefinition: parts => simpleCstNode(parts, 'ConstDefinition'),
    FlagDefinition: parts => simpleCstNode(parts, 'FlagDefinition'),
    IncludeDrs: parts => simpleCstNode(parts, 'IncludeDrs'),
    MultilineComment: ([start, parts, end]) => simpleCstNode([start, partsToCstNodes(parts), end], 'MultilineComment'),
    __: parts => unwrapTokens(parts)
};
function nodeToCst({ type, children }) {
    return cstVisitorMap[type](children);
}
function partsToCstNodes(parts) {
    const flatParts = flattenParts(parts);
    const convertedParts = flatParts.map(part => {
        if ('children' in part && !('childrenByType' in part))
            return nodeToCst(part);
        else
            return part;
    });
    return (0, lodash_1.flattenDeep)(convertedParts);
}
function simpleCstNode(parts, type) {
    const node = { type };
    const children = partsToCstNodes(parts).map(x => setNodeParent(x, node));
    const childrenByType = (0, lodash_1.groupBy)(children, 'type');
    Object.defineProperties(node, {
        children: { enumerable: false, configurable: true, value: children },
        childrenByType: { enumerable: false, configurable: true, value: childrenByType }
    });
    return node;
}
function setNodeParent(node, parent) {
    Object.defineProperty(node, 'parent', { enumerable: false, configurable: true, value: parent });
    return node;
}
function visitGenericIf([ruleNode]) {
    if (ruleNode.length === 1)
        ruleNode = ruleNode[0];
    const [ifToken, ws1, condition, ws2, statements, elseifs, elseStuff, endifToken] = ruleNode;
    return simpleCstNode([
        ifToken, ws1, simpleCstNode([condition], 'ConditionExpression'),
        simpleCstNode([ws2, statements], 'StatementsBlock'),
        elseifs.map(([elseifToken, ws1, condition, ws2, ...statements]) => simpleCstNode([
            elseifToken, ws1, simpleCstNode([condition], 'ConditionExpression'), ws2,
            simpleCstNode(statements, 'StatementsBlock')
        ], 'ElseIf')),
        elseStuff ? simpleCstNode([
            elseStuff[0], elseStuff[1], simpleCstNode(elseStuff.slice(2), 'StatementsBlock')
        ], 'Else') : null,
        endifToken
    ], 'If');
}
function visitGenericRandom([ruleNode]) {
    if (ruleNode.length === 1)
        ruleNode = ruleNode[0];
    const [startToken, ws, comments, chances, endToken] = ruleNode;
    return simpleCstNode([
        startToken, ws,
        simpleCstNode([
            comments,
            chances.map(([chanceToken, ws1, percent, ws2, ...statements]) => simpleCstNode([
                chanceToken, ws1, percent, ws2, simpleCstNode(statements, 'StatementsBlock')
            ], 'Chance'))
        ], 'StatementsBlock'),
        endToken
    ], 'Random');
}
function unwrapTokens(parts) {
    const onlyTokens = flattenParts(parts).map(part => (0, treeHelpers_1.isToken)(part) ? part : unwrapTokens(part.children));
    return (0, lodash_1.flattenDeep)(onlyTokens);
}
function flattenParts(parts) {
    return (0, lodash_1.flattenDeep)(parts).filter(p => p !== null);
}
//# sourceMappingURL=cst.js.map