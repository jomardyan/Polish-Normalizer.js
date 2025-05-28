
// Map
const polishToLatinMap = {
  'Ą': 'A', 'ą': 'a',
  'Ć': 'C', 'ć': 'c',
  'Ę': 'E', 'ę': 'e',
  'Ł': 'L', 'ł': 'l',
  'Ń': 'N', 'ń': 'n',
  'Ó': 'O', 'ó': 'o',
  'Ś': 'S', 'ś': 's',
  'Ź': 'Z', 'ź': 'z',
  'Ż': 'Z', 'ż': 'z'
};

// Regex match
const polishChars = Object.keys(polishToLatinMap).join('');
const polishRegex = new RegExp('[' + polishChars + ']', 'g');

/**
 * Replace all Polish diacritics in `text` with plain Latin letters.
 * @param {string} text
 * @returns {string}
 */
export function normalizePolish(text) {
  if (typeof text !== 'string') return text;
  return text.replace(polishRegex, char => polishToLatinMap[char] || char);
}

// attach as a String prototype method
//    so you can just do: "Zażółć".normalizePolish()
if (typeof String !== 'undefined' && !String.prototype.normalizePolish) {
  /* eslint-disable no-extend-native */
  String.prototype.normalizePolish = function () {
    return normalizePolish(this);
  };
  /* eslint-enable no-extend-native */
}
