"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAst = toAst;
const treeHelpers_1 = require("../treeHelpers");
function toAst(root) {
    return nodeToAst(root);
}
const astVisitorMap = {
    Script: (cstNode) => Object.assign(cstNode, {
        type: 'Script',
        statements: (0, treeHelpers_1.getChildNodes)((0, treeHelpers_1.getChildNode)(cstNode, 'StatementsBlock', true)).map(nodeToAst)
    }),
    If: (ifNode) => {
        const node = Object.assign(ifNode, {
            type: 'IfStatement',
            condition: getCondition(ifNode)
        });
        addStatements(node, 'statements', ifNode);
        if ('ElseIf' in ifNode.childrenByType) {
            node.elseifs = (0, treeHelpers_1.getChildNodes)(ifNode, 'ElseIf').map(elseIf => {
                const node = Object.assign(elseIf, {
                    type: 'ElseIfStatement',
                    condition: getCondition(elseIf)
                });
                addStatements(node, 'statements', elseIf);
                return node;
            });
        }
        const elseNode = (0, treeHelpers_1.getChildNode)(ifNode, 'Else');
        if (elseNode)
            addStatements(node, 'elseStatements', elseNode, true);
        return node;
        function getCondition(node) {
            return (0, treeHelpers_1.getToken)((0, treeHelpers_1.getChildNode)(node, 'ConditionExpression', true), undefined, true).value;
        }
    },
    Random: (node) => {
        Object.assign(node, {
            type: 'RandomStatement'
        });
        addStatements(node, 'statements', node, true);
        return node;
    },
    Chance: (node) => {
        Object.assign(node, {
            type: 'ChanceStatement',
            chance: getTokenValue((0, treeHelpers_1.getToken)(node, 'int', true))
        });
        addStatements(node, 'statements', node, true);
        return node;
    },
    Section: (cstNode) => Object.assign(cstNode, {
        type: 'SectionStatement',
        name: (0, treeHelpers_1.getToken)(cstNode, 'identifier', true).value,
        statements: (0, treeHelpers_1.getChildNodes)((0, treeHelpers_1.getChildNode)(cstNode, 'StatementsBlock', true)).map(nodeToAst)
    }),
    Command: (cstNode) => {
        const astNode = Object.assign(cstNode, {
            type: 'CommandStatement',
            ...getNameAndArgs((0, treeHelpers_1.getChildNode)(cstNode, 'CommandHeader', true))
        });
        const body = (0, treeHelpers_1.getChildNode)(cstNode, 'CommandBody');
        if (body)
            visitCommandBody(astNode, body);
        return astNode;
    },
    ConditionalCommand: (cstNode) => {
        const astNode = Object.assign(cstNode, {
            type: 'ConditionalCommandStatement',
            header: nodeToAst((0, treeHelpers_1.getChildNode)(cstNode, 'If', true))
        });
        visitCommandBody(astNode, (0, treeHelpers_1.getChildNode)(cstNode, 'CommandBody', true));
        return astNode;
    },
    RandomCommand: (cstNode) => {
        const astNode = Object.assign(cstNode, {
            type: 'RandomCommandStatement',
            header: nodeToAst((0, treeHelpers_1.getChildNode)(cstNode, 'Random', true))
        });
        visitCommandBody(astNode, (0, treeHelpers_1.getChildNode)(cstNode, 'CommandBody', true));
        return astNode;
    },
    Attribute: (cstNode) => Object.assign(cstNode, {
        type: 'AttributeStatement',
        ...getNameAndArgs(cstNode)
    }),
    ConstDefinition: (cstNode) => {
        const { name, args } = getNameAndArgs(cstNode);
        return Object.assign(cstNode, {
            type: 'DeclarationStatement',
            kind: 'const',
            name,
            value: args[0]
        });
    },
    FlagDefinition: (cstNode) => Object.assign(cstNode, {
        type: 'DeclarationStatement',
        kind: 'define',
        name: getNameAndArgs(cstNode).name
    }),
    IncludeDrs: (cstNode) => {
        const { name, args } = getNameAndArgs(cstNode);
        const astNode = Object.assign(cstNode, {
            type: 'IncludeDrsStatement',
            filename: name
        });
        if (args.length)
            astNode.id = args[0];
        return astNode;
    },
    MultilineComment: (cstNode) => Object.assign(cstNode, {
        type: 'MultilineComment',
        comment: (0, treeHelpers_1.getTokens)(cstNode).slice(1, -1).map(t => t.text).join('') // Slicing off '/*' and '*/'
    })
};
function visitCommandBody(command, body) {
    addStatements(command, 'statements', body, true);
    const preCommentsContainer = (0, treeHelpers_1.getChildNode)(body, 'PreCurlyComments');
    if (preCommentsContainer) {
        const preComments = (0, treeHelpers_1.getChildNodes)(preCommentsContainer, 'MultilineComment').map(nodeToAst);
        if (preComments.length)
            command.preLeftCurlyComments = preComments;
    }
}
function nodeToAst(node) {
    return astVisitorMap[node.type](node);
}
function addStatements(targetAstNode, propName, sourceCstNode, addEmptyArrayIfNone = false) {
    const statements = (0, treeHelpers_1.getChildNodes)((0, treeHelpers_1.getChildNode)(sourceCstNode, 'StatementsBlock', true)).map(nodeToAst);
    if (statements.length || addEmptyArrayIfNone)
        targetAstNode[propName] = statements;
}
function getNameAndArgs(node) {
    const [name, ...args] = node.children.filter(isValueToken).map(getTokenValue);
    return { name: name, args };
}
function getTokenValue(token) {
    if (token.type === 'int')
        return parseInt(token.value, 10);
    else
        return token.value;
}
function isValueToken(node) {
    return ['int', 'identifier'].includes(node.type);
}
//# sourceMappingURL=ast.js.map