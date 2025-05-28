
# Polish Normalizer

A simple JavaScript utility to normalize Polish characters by replacing Polish diacritics with their plain Latin equivalents.

## Features
- Converts Polish letters with diacritics (e.g., ą, ć, ę, ł, ń, ó, ś, ź, ż) to their Latin counterparts.
- Provides a function and a String prototype method for easy usage.

## Usage

### Import and Use the Function
```js
import { normalizePolish } from './polish-normalizer.js';

console.log(normalizePolish('Zażółć gęślą jaźń')); // Output: "Zazolc gesla jazn"
```

### Use as a String Prototype Method
```js
import './polish-normalizer.js';

console.log('Zażółć gęślą jaźń'.normalizePolish()); // Output: "Zazolc gesla jazn"
```

## API
### `normalizePolish(text: string): string`
Replaces all Polish diacritics in the input string with their Latin equivalents.

### String.prototype.normalizePolish()
Adds a method to all strings to normalize Polish characters.

## License
MIT
