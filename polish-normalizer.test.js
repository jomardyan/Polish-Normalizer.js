/**
 * Test suite for Polish Normalizer
 */
import { normalizePolish } from './polish-normalizer.js';

/**
 * Simple assertion helper for testing
 * @param {*} actual - The actual value
 * @param {*} expected - The expected value
 * @param {string} message - Test description
 */
function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(
      `Assertion failed: ${message}\nExpected: ${expected}\nActual:   ${actual}`
    );
  }
  console.log(`✓ ${message}`);
}

/**
 * Run all test cases
 */
function runTests() {
  console.log('Running Polish Normalizer tests...\n');

  // Basic functionality tests
  assertEqual(
    normalizePolish('Zażółć gęślą jaźń'),
    'Zazolc gesla jazn',
    'Polish pangram normalization'
  );

  assertEqual(
    normalizePolish('ąćęłńóśźż'),
    'acelnoszz',
    'All lowercase diacritics'
  );

  assertEqual(
    normalizePolish('ĄĆĘŁŃÓŚŹŻ'),
    'ACELNOSZZ',
    'All uppercase diacritics'
  );

  // Edge cases
  assertEqual(
    normalizePolish('Hello World!'),
    'Hello World!',
    'Text without Polish letters'
  );

  assertEqual(normalizePolish(''), '', 'Empty string');
  assertEqual(normalizePolish(null), null, 'Null input');
  assertEqual(normalizePolish(undefined), undefined, 'Undefined input');
  assertEqual(normalizePolish(12345), 12345, 'Non-string input');

  // Mixed content tests
  assertEqual(
    normalizePolish('Zażółć 123!'),
    'Zazolc 123!',
    'Mixed content with numbers and punctuation'
  );

  assertEqual(
    normalizePolish('Test ąść mixed ŁÓŻŹ content'),
    'Test asc mixed LOZZ content',
    'Mixed case and content'
  );

  // String prototype method test
  assertEqual(
    'Zażółć gęślą jaźń'.normalizePolish(),
    'Zazolc gesla jazn',
    'String prototype method'
  );

  // Additional edge cases
  assertEqual(normalizePolish('   '), '   ', 'Whitespace only');

  assertEqual(normalizePolish('\n\t\r'), '\n\t\r', 'Whitespace characters');

  console.log('\n🎉 All tests passed!');
}

// Run the tests
runTests();
