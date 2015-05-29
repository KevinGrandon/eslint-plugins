# Eslint Plugins

Just a collection of random plugins.

## arrow-function-parens

Requires that parens are not wrapping single arguments inside of arrow functions.

Valid:

```
  'a.then(foo => {});',
  'a.then(foo => a);',
  'a.then((foo, bar) => {});',
  'a.then((foo, bar) => a);'
```

Invalid:

```
  'a.then((foo) => {});',
  'a.then((foo) => { if (true) {}; });'
```
