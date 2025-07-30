# Unit Test Demo

A TypeScript project demonstrating unit testing with Jest, featuring utility functions and comprehensive test coverage.

## 🚀 Features

- **TypeScript** - Modern JavaScript with static typing
- **Jest** - Comprehensive testing framework
- **Code Coverage** - Built-in coverage reporting with 80% threshold
- **Hot Reload** - Development server with `tsx` for fast iteration
- **Utility Functions** - String comparison and mathematical operations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You can check your versions with:

```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone <repository-url>
   cd unit_test_demo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Usage

### Development

Start the development server with hot reload:

```bash
npm run dev
```

This will start the TypeScript compiler in watch mode and run `index.ts`.

### Testing

Run all tests:

```bash
npm test
```

This command will:

- Execute all test files in the `tests/` directory
- Generate coverage reports
- Enforce 80% coverage threshold for branches, functions, lines, and statements

### Test Coverage

The project includes comprehensive test coverage with the following thresholds:

- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%
- **Statements**: 80%

Coverage reports are generated in the `coverage/` directory in multiple formats:

- JSON
- LCOV
- Text
- Clover

## 📁 Project Structure

```
unit_test_demo/
├── src/
│   └── utils.ts          # Utility functions
├── tests/
│   ├── comparator.test.ts # Tests for comparator function
│   └── sample.test.ts     # Sample tests
├── index.ts              # Main entry point
├── jest.config.js        # Jest configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```
