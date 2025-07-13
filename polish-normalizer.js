/**
 * Polish-to-Latin character mapping for diacritic normalization
 * @type {Object<string, string>}
 */
const polishToLatinMap = {
  Ą: 'A',
  ą: 'a',
  Ć: 'C',
  ć: 'c',
  Ę: 'E',
  ę: 'e',
  Ł: 'L',
  ł: 'l',
  Ń: 'N',
  ń: 'n',
  Ó: 'O',
  ó: 'o',
  Ś: 'S',
  ś: 's',
  Ź: 'Z',
  ź: 'z',
  Ż: 'Z',
  ż: 'z',
};

// Create regex patterns for matching Polish characters
const polishChars = Object.keys(polishToLatinMap).join('');
const polishRegex = new RegExp('[' + polishChars + ']', 'g');
const polishDetectionRegex = new RegExp('[' + polishChars + ']');

/**
 * Replace all Polish diacritics in the input text with plain Latin letters.
 *
 * @param {string} text - The text containing Polish diacritics to normalize
 * @returns {string|*} The normalized text with Latin equivalents, or original value if not a string
 *
 * @example
 * normalizePolish('Zażółć gęślą jaźń'); // returns 'Zazolc gesla jazn'
 * normalizePolish('Hello World'); // returns 'Hello World'
 * normalizePolish(''); // returns ''
 */
export function normalizePolish(text) {
  if (typeof text !== 'string') {
    return text;
  }
  return text.replace(polishRegex, char => polishToLatinMap[char] || char);
}

/**
 * Check if the input text contains any Polish diacritic characters.
 *
 * @param {string} text - The text to check for Polish characters
 * @returns {boolean} True if the text contains Polish diacritics, false otherwise
 *
 * @example
 * hasPolishChars('Zażółć gęślą jaźń'); // returns true
 * hasPolishChars('Hello World'); // returns false
 * hasPolishChars('Kraków'); // returns true
 */
export function hasPolishChars(text) {
  if (typeof text !== 'string') {
    return false;
  }
  return polishDetectionRegex.test(text);
}

/**
 * Get an array of all Polish diacritic characters found in the text.
 *
 * @param {string} text - The text to analyze
 * @returns {string[]} Array of unique Polish characters found in the text
 *
 * @example
 * getPolishChars('Zażółć'); // returns ['ż', 'ó', 'ć']
 * getPolishChars('Hello'); // returns []
 */
export function getPolishChars(text) {
  if (typeof text !== 'string') {
    return [];
  }
  const matches = text.match(polishRegex) || [];
  return [...new Set(matches)];
}

/**
 * Attach normalizePolish as a String prototype method
 * Allows usage like: "Zażółć".normalizePolish()
 */
if (
  typeof String !== 'undefined' &&
  String.prototype &&
  !String.prototype.normalizePolish
) {
  /* eslint-disable no-extend-native */
  String.prototype.normalizePolish = function () {
    return normalizePolish(this.toString());
  };

  String.prototype.hasPolishChars = function () {
    return hasPolishChars(this.toString());
  };

  String.prototype.getPolishChars = function () {
    return getPolishChars(this.toString());
  };
  /* eslint-enable no-extend-native */
}
