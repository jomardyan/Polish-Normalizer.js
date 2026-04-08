# Polish Normalizer

A tiny, zero-dependency JavaScript utility to normalize Polish characters by replacing Polish diacritics with their plain Latin equivalents. Perfect for search functionality, URL slugs, and text processing where Polish special characters need to be converted to standard ASCII.

## Features

- ✨ **Lightweight**: Zero dependencies, <1KB minified
- 🎯 **Complete**: Converts all Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż)
- 🚀 **Fast**: Optimized regex-based implementation
- 📦 **ES Module**: Modern JavaScript module system
- 🔧 **TypeScript**: Includes TypeScript definitions
- 🌐 **Browser & Node**: Works in both environments
- 🎨 **Flexible**: Function export and String prototype method

## Installation

```bash
npm install polish-normalizer
```

## Usage

### ES Module Import

```js
import {
  normalizePolish,
  hasPolishChars,
  getPolishChars,
} from 'polish-normalizer';

// Normalize text
console.log(normalizePolish('Zażółć gęślą jaźń'));
// Output: "Zazolc gesla jazn"

// Check for Polish characters
console.log(hasPolishChars('Kraków'));
// Output: true

console.log(hasPolishChars('Hello World'));
// Output: false

// Extract Polish characters
console.log(getPolishChars('Zażółć'));
// Output: ['ż', 'ó', 'ł', 'ć']

// All uppercase
console.log(normalizePolish('ĄĆĘŁŃÓŚŹŻ'));
// Output: "ACELNOSZZ"

// Mixed content
console.log(normalizePolish('Kraków, Gdańsk, Łódź'));
// Output: "Krakow, Gdansk, Lodz"
```

### String Prototype Method

```js
import 'polish-normalizer';

// Normalize using prototype method
console.log('Zażółć gęślą jaźń'.normalizePolish());
// Output: "Zazolc gesla jazn"

// Check for Polish characters
console.log('Kraków'.hasPolishChars());
// Output: true

// Extract Polish characters
console.log('Witaj świecie!'.getPolishChars());
// Output: ['ś']
```

### Browser Usage

```html
<script type="module">
  import { normalizePolish } from './polish-normalizer.js';

  const input = 'Żółć, jaźń, gęślą';
  const normalized = normalizePolish(input);
  console.log(normalized); // "Zolc, jazn, gesla"
</script>
```

## API Reference

### `normalizePolish(text)`

Converts Polish diacritic characters to their Latin equivalents.

**Parameters:**

- `text` (string): The text to normalize

**Returns:**

- (string): The normalized text
- (any): Original value if input is not a string

**Examples:**

```js
normalizePolish('Zażółć gęślą jaźń'); // 'Zazolc gesla jazn'
normalizePolish('Hello World'); // 'Hello World' (unchanged)
normalizePolish(''); // ''
normalizePolish(null); // null
normalizePolish(123); // 123
```

### `hasPolishChars(text)`

Checks if the input text contains any Polish diacritic characters.

**Parameters:**

- `text` (string): The text to check

**Returns:**

- (boolean): True if the text contains Polish diacritics, false otherwise

**Examples:**

```js
hasPolishChars('Zażółć gęślą jaźń'); // true
hasPolishChars('Hello World'); // false
hasPolishChars('Kraków'); // true
hasPolishChars(''); // false
```

### `getPolishChars(text)`

Extracts all unique Polish diacritic characters from the input text.

**Parameters:**

- `text` (string): The text to analyze

**Returns:**

- (string[]): Array of unique Polish characters found in the text

**Examples:**

```js
getPolishChars('Zażółć'); // ['ż', 'ó', 'ł', 'ć']
getPolishChars('Hello World'); // []
getPolishChars('ąąąććć'); // ['ą', 'ć'] (unique only)
```

### String.prototype.normalizePolish()

Extends String prototype with normalization method.

**Returns:**

- (string): The normalized string

```js
'Zażółć gęślą jaźń'.normalizePolish(); // 'Zazolc gesla jazn'
```

### String.prototype.hasPolishChars()

Extends String prototype with Polish character detection.

**Returns:**

- (boolean): True if the string contains Polish diacritics

```js
'Kraków'.hasPolishChars(); // true
'Hello'.hasPolishChars(); // false
```

### String.prototype.getPolishChars()

Extends String prototype with Polish character extraction.

**Returns:**

- (string[]): Array of unique Polish characters in the string

```js
'Zażółć'.getPolishChars(); // ['ż', 'ó', 'ł', 'ć']
```

## Character Mappings

| Polish | Latin | Polish | Latin |
| ------ | ----- | ------ | ----- |
| Ą      | A     | ą      | a     |
| Ć      | C     | ć      | c     |
| Ę      | E     | ę      | e     |
| Ł      | L     | ł      | l     |
| Ń      | N     | ń      | n     |
| Ó      | O     | ó      | o     |
| Ś      | S     | ś      | s     |
| Ź      | Z     | ź      | z     |
| Ż      | Z     | ż      | z     |

## Use Cases

- **Search functionality**: Normalize user input for better search results
- **URL slugs**: Create clean URLs from Polish content
- **Database indexing**: Standardize text for consistent querying
- **Form validation**: Normalize user input before processing
- **Text analysis**: Prepare Polish text for processing algorithms

## TypeScript Support

This package includes TypeScript definitions:

```typescript
import { normalizePolish } from 'polish-normalizer';

const result: string = normalizePolish('Zażółć gęślą jaźń');
```

## Browser Compatibility

- Modern browsers with ES2015+ support
- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Hayk Jomardyan
