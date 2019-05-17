# test case for [standard-things/esm#807](https://github.com/standard-things/esm/issues/807)

To reproduce

```
$ npm install
$ node index.js
/private/tmp/esm-bug/module.js:2
 [Symbol.iterator]() {
                  ^

SyntaxError: Invalid or unexpected token
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
```

Then downgrade to 3.2.22 to show that it’s working as expected

```
$ npm i esm@3.2.22 --save-exact
+ esm@3.2.22
$ node index.js
test
```
