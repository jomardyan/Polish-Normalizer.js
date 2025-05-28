import { normalizePolish } from './polish-normalizer.js';

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: ${message}\nExpected: ${expected}\nActual:   ${actual}`);
  }
}

function runTests() {
  // Basic cases
  assertEqual(normalizePolish('Zażółć gęślą jaźń'), 'Zazolc gesla jazn', 'Polish pangram');
  assertEqual(normalizePolish('ąćęłńóśźż'), 'acelnoszz', 'All lowercase diacritics');
  assertEqual(normalizePolish('ĄĆĘŁŃÓŚŹŻ'), 'ACELNOSZZ', 'All uppercase diacritics');
  assertEqual(normalizePolish('Hello World!'), 'Hello World!', 'No Polish letters');
  assertEqual(normalizePolish(''), '', 'Empty string');
  assertEqual(normalizePolish(null), null, 'Null input');
  assertEqual(normalizePolish(undefined), undefined, 'Undefined input');
  assertEqual(normalizePolish(12345), 12345, 'Non-string input');

  // Mixed content
  assertEqual(normalizePolish('Zażółć 123!'), 'Zazolc 123!', 'Mixed with numbers and punctuation');
  assertEqual('Zażółć gęślą jaźń'.normalizePolish(), 'Zazolc gesla jazn', 'String prototype method');

  console.log('All tests passed!');
}

runTests();
