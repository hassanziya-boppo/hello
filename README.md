# Greeting utility

A small helper to generate friendly greetings in English or French, with options for shouting and fallback behavior.

## Usage

```js
const { greet } = require('./src/greet');

console.log(greet('Alice'));
// → Hello, Alice!

console.log(greet('Bob', { locale: 'fr', shout: true }));
// → BONJOUR, BOB !
```

- If `name` is missing or empty, it falls back to "there".
- If `options.locale` is not "fr", English is used.
- If `options.shout` is true, the greeting is uppercased.
