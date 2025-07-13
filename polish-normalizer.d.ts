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
 * String prototype extension for normalizing Polish characters
 */
declare global {
  interface String {
    /**
     * Replace all Polish diacritics in this string with plain Latin letters.
     * @returns The normalized string with Latin equivalents
     */
    normalizePolish(): string;
  }
}

export {};