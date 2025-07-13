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

// Create regex pattern for matching Polish characters
const polishChars = Object.keys(polishToLatinMap).join('');
const polishRegex = new RegExp('[' + polishChars + ']', 'g');

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
 * Attach normalizePolish as a String prototype method
 * Allows usage like: "Zażółć".normalizePolish()
 */
if (typeof String !== 'undefined' && !String.prototype.normalizePolish) {
  /* eslint-disable no-extend-native */
  String.prototype.normalizePolish = function () {
    return normalizePolish(this);
  };
  /* eslint-enable no-extend-native */
}
