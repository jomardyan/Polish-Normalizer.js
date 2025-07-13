# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `hasPolishChars()` function to detect presence of Polish diacritic characters
- `getPolishChars()` function to extract unique Polish characters from text
- String prototype extensions for all functions (`hasPolishChars()`, `getPolishChars()`)
- Comprehensive TypeScript definitions for all functions
- ESLint configuration for code quality
- Prettier configuration for code formatting
- Enhanced test suite with better coverage
- Detailed API documentation
- Interactive HTML demo with real-time analysis
- GitHub Actions workflow for automated testing
- Support for multiple Node.js versions (16, 18, 20)

### Changed

- Enhanced JSDoc documentation throughout the codebase
- Improved README with comprehensive examples and use cases
- Better project structure with development dependencies
- Enhanced HTML demo with modern styling and character analysis
- More robust String prototype extension with better feature detection

### Fixed

- Code style issues and linting errors
- Improved browser compatibility
- Better error handling for edge cases

## [1.0.0] - Previous Release

### Added

- Basic `normalizePolish()` function
- String prototype extension for normalization
- ES module support
- Basic test suite
- MIT license

### Features

- Converts all Polish diacritic characters (ą, ć, ę, ł, ń, ó, ś, ź, ż)
- Zero dependencies
- Browser and Node.js support
- TypeScript-friendly
