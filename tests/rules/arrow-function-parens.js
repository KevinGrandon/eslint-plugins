var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);


var valid = [
  'a.then(foo => {});',
  'a.then(foo => a);',
  'a.then((foo, bar) => {});',
  'a.then((foo, bar) => a);'
].map(function(code) {
  return {
    code: code,
    ecmaFeatures: { arrowFunctions: true }
  };
});

var message = 'arrow function with a single argument should not be wrapped in parens';

var invalid = [
  'a.then((foo) => {});',
  'a.then((foo) => { if (true) {}; });'
].map(function(code) {
  return {
    code: code,
    ecmaFeatures: { arrowFunctions: true },
    errors: [{ message: message }]
  };
});

eslintTester.addRuleTest('./lib/rules/arrow-function-parens', {
  valid: valid,
  invalid: invalid
});
