"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const treeHelpers_1 = require("../../treeHelpers");
const tokenHelpers_1 = require("../../tokenHelpers");
function check(ast) {
    const redeclared = [];
    function reduceStatementsToSeen(statements, seen) {
        return (statements && statements.length)
            ? statements.reduce((acc, statement) => ({ ...acc, ...visitNode(statement, acc) }), seen)
            : seen;
    }
    function visitIfNode(node, seen) {
        const seenInIfBranch = reduceStatementsToSeen(node.statements, seen);
        const seenInElseIfBranches = !node.elseifs
            ? seen
            : node.elseifs
                .map(elseIf => reduceStatementsToSeen(elseIf.statements, seen))
                .reduce((acc, next) => ({ ...acc, ...next }), seen);
        const seenInElseBranch = reduceStatementsToSeen(node.elseStatements, seen);
        return {
            ...seenInIfBranch,
            ...seenInElseIfBranches,
            ...seenInElseBranch
        };
    }
    function visitRandomNode(node, seen) {
        return node.statements
            .filter(s => s.type === 'ChanceStatement')
            .map(chance => reduceStatementsToSeen(chance.statements, seen))
            .reduce((acc, next) => ({ ...acc, ...next }), seen);
    }
    function visitDeclarationNode(node, seen) {
        const nameToken = (0, treeHelpers_1.getToken)(node, 'identifier', true);
        if (seen[nameToken.value]) {
            redeclared.push(nameToken);
            return seen;
        }
        else {
            return { ...seen, [nameToken.value]: true };
        }
    }
    function visitNode(node, seen) {
        if (node.type === 'IfStatement') {
            return visitIfNode(node, seen);
        }
        else if (node.type === 'RandomStatement') {
            return visitRandomNode(node, seen);
        }
        else if (node.type === 'DeclarationStatement') {
            return visitDeclarationNode(node, seen);
        }
        else if ('statements' in node) {
            return reduceStatementsToSeen(node.statements, seen);
        }
        else {
            return seen;
        }
    }
    visitNode(ast, {});
    return redeclared.map(x => ({
        name: 'LintError',
        message: `${x.value} is already defined!`,
        boundaries: (0, tokenHelpers_1.getBoundaries)(x)
    }));
}
//# sourceMappingURL=no-redeclare.js.map