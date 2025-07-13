/**
 * Test suite for Polish Normalizer
 */
import {
  normalizePolish,
  hasPolishChars,
  getPolishChars,
} from './polish-normalizer.js';

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
 * Deep equality assertion for arrays
 * @param {*} actual - The actual array
 * @param {*} expected - The expected array
 * @param {string} message - Test description
 */
function assertArrayEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `Assertion failed: ${message}\nExpected: ${JSON.stringify(expected)}\nActual:   ${JSON.stringify(actual)}`
    );
  }
  console.log(`✓ ${message}`);
}

/**
 * Run all test cases
 */
function runTests() {
  console.log('Running Polish Normalizer tests...\n');

  console.log('📝 Testing normalizePolish function:');

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

  // Additional edge cases
  assertEqual(normalizePolish('   '), '   ', 'Whitespace only');

  assertEqual(normalizePolish('\n\t\r'), '\n\t\r', 'Whitespace characters');

  console.log('\n🔍 Testing hasPolishChars function:');

  // hasPolishChars tests
  assertEqual(
    hasPolishChars('Zażółć gęślą jaźń'),
    true,
    'Text with Polish chars'
  );
  assertEqual(
    hasPolishChars('Hello World'),
    false,
    'Text without Polish chars'
  );
  assertEqual(hasPolishChars('Kraków'), true, 'Single Polish char');
  assertEqual(hasPolishChars(''), false, 'Empty string has no Polish chars');
  assertEqual(hasPolishChars('123!@#'), false, 'Numbers and symbols');
  assertEqual(hasPolishChars(null), false, 'Null input');
  assertEqual(hasPolishChars(undefined), false, 'Undefined input');
  assertEqual(hasPolishChars(123), false, 'Non-string input');

  console.log('\n📊 Testing getPolishChars function:');

  // getPolishChars tests
  assertArrayEqual(
    getPolishChars('Zażółć').sort(),
    ['ć', 'ł', 'ó', 'ż'].sort(),
    'Extract Polish chars from text'
  );

  assertArrayEqual(
    getPolishChars('ąćęłńóśźż'),
    ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'],
    'All lowercase Polish chars'
  );

  assertArrayEqual(
    getPolishChars('ĄĆĘŁŃÓŚŹŻ'),
    ['Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż'],
    'All uppercase Polish chars'
  );

  assertArrayEqual(getPolishChars('Hello World'), [], 'No Polish chars');

  assertArrayEqual(getPolishChars('ąąąććć'), ['ą', 'ć'], 'Unique chars only');

  assertArrayEqual(getPolishChars(''), [], 'Empty string');
  assertArrayEqual(getPolishChars(null), [], 'Null input');
  assertArrayEqual(getPolishChars(undefined), [], 'Undefined input');

  console.log('\n🔗 Testing String prototype methods:');

  // String prototype method tests
  assertEqual(
    'Zażółć gęślą jaźń'.normalizePolish(),
    'Zazolc gesla jazn',
    'String prototype normalizePolish'
  );

  assertEqual(
    'Kraków'.hasPolishChars(),
    true,
    'String prototype hasPolishChars (true)'
  );

  assertEqual(
    'Hello'.hasPolishChars(),
    false,
    'String prototype hasPolishChars (false)'
  );

  assertArrayEqual(
    'Zażółć'.getPolishChars().sort(),
    ['ć', 'ł', 'ó', 'ż'].sort(),
    'String prototype getPolishChars'
  );

  console.log('\n🎉 All tests passed!');
}

// Run the tests
runTests();
