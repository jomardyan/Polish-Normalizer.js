/**
 * Polish Normalizer TypeScript Definitions
 */

/**
 * Replace all Polish diacritics in the input text with plain Latin letters.
 *
 * @param text - The text containing Polish diacritics to normalize
 * @returns The normalized text with Latin equivalents, or original value if not a string
 */
export declare function normalizePolish(text: string): string;
export declare function normalizePolish(text: any): any;

/**
 * Check if the input text contains any Polish diacritic characters.
 *
 * @param text - The text to check for Polish characters
 * @returns True if the text contains Polish diacritics, false otherwise
 */
export declare function hasPolishChars(text: string): boolean;

/**
 * Get an array of all Polish diacritic characters found in the text.
 *
 * @param text - The text to analyze
 * @returns Array of unique Polish characters found in the text
 */
export declare function getPolishChars(text: string): string[];

/**
 * String prototype extensions for normalizing Polish characters
 */
declare global {
  interface String {
    /**
     * Replace all Polish diacritics in this string with plain Latin letters.
     * @returns The normalized string with Latin equivalents
     */
    normalizePolish(): string;

    /**
     * Check if this string contains any Polish diacritic characters.
     * @returns True if the string contains Polish diacritics, false otherwise
     */
    hasPolishChars(): boolean;

    /**
     * Get an array of all Polish diacritic characters found in this string.
     * @returns Array of unique Polish characters found in the string
     */
    getPolishChars(): string[];
  }
}

export {};