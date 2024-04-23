# text-tweak

text-tweak is a lightweight JavaScript/TypeScript package for effortless string casing formatting. With text-tweak, you can easily convert text between various casing styles such as lowercase, UPPERCASE, Title Case, camelCase, snake_case, kebab-case, PascalCase, and more.

## Installation

To install text-tweak, simply use npm:

```bash
npm install text-tweak
```

## Key Features

- Convert text to lowercase, UPPERCASE, Title Case, sentence case, and more.
- Transform text into camelCase, snake_case, kebab-case, PascalCase, and more.
- Create engaging and consistent text formatting effortlessly.
- Supports a variety of common and custom casing styles.

## Why Choose CaseMaster

- Easy-to-use functions for quick and efficient string casing transformations.
- Versatile package suitable for a wide range of projects.
- Lightweight package with minimal overhead.
- Well-tested and reliable functions to ensure consistent results.

## How to Use

To use the functions provided by the `text-tweak` package, follow these steps:

1. Import the necessary functions from the `text-tweak` package:

```javascript
import {
  toLowerCase,
  toUpperCase,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toConstantCase,
  toDotCase,
  toPathCase,
  toAlternatingCase,
  toInvertedCase,
  toSpongeCase,
  toReverseCase,
  toSmallCaps
} from 'text-tweak';

```

### toLowerCase()
Converts a string to lowercase.

```javascript
const text = 'Hello World';
const lowerCaseText = toLowerCase(text);
console.log(lowerCaseText); // Output: 'hello world'
```

### toUpperCase()
Converts a string to uppercase.

```javascript
const text = 'Hello World';
const upperCaseText = toUpperCase(text);
console.log(upperCaseText); // Output: 'HELLO WORLD'
```

### toCamelCase()
Converts a string to camel case.

```javascript
const text = 'hello world';
const camelCaseText = toCamelCase(text);
console.log(camelCaseText); // Output: 'helloWorld'
```

### toKebabCase()
Converts a string to kebab case.

```javascript
const text = 'Hello World';
const kebabCaseText = toKebabCase(text);
console.log(kebabCaseText); // Output: 'hello-world'
```

### toPascalCase()
Converts a string to Pascal case.

```javascript
const text = 'hello world';
const pascalCaseText = toPascalCase(text);
console.log(pascalCaseText); // Output: 'HelloWorld'
```

### toConstantCase()
Converts a string to constant case.

```javascript
const text = 'Hello World';
const constantCaseText = toConstantCase(text);
console.log(constantCaseText); // Output: 'HELLO_WORLD'
```

### toDotCase()
Converts a string to dot case.

```javascript
const text = 'Hello World';
const dotCaseText = toDotCase(text);
console.log(dotCaseText); // Output: 'hello.world'
```

### toPathCase()
Converts a string to path case.

```javascript
const text = 'Hello World';
const pathCaseText = toPathCase(text);
console.log(pathCaseText); // Output: 'hello/world'
```

### toAlternatingCase()
Converts a string to alternating case.

```javascript
const text = 'Hello World';
const alternatingCaseText = toAlternatingCase(text);
console.log(alternatingCaseText); // Output: 'HeLlO wOrLd'
```

### toInvertedCase()
Converts a string to inverted case.

```javascript
const text = 'Hello World';
const invertedCaseText = toInvertedCase(text);
console.log(invertedCaseText); // Output: 'hELLO wORLD'
```

### toSpongeCase()
Converts a string to sponge case.

```javascript
const text = 'Hello World';
const spongeCaseText = toSpongeCase(text);
console.log(spongeCaseText); // Output: 'hElLo wOrLd'
```

### toReverseCase()
Converts a string to reverse case.

```javascript
const text = 'Hello World';
const reverseCaseText = toReverseCase(text);
console.log(reverseCaseText); // Output: 'hELLO wORLD'
```

### toSmallCaps()
Converts a string to small caps.

```javascript
const text = 'Hello World';
const smallCapsText = toSmallCaps(text);
console.log(smallCapsText); // Output: 'ʜᴇʟʟᴏ ᴡᴏʀʟᴅ'
```

## Check out these other fantastic packages developed by Me:
- **[Debounce Throttling](https://www.npmjs.com/package/debounce-throttling)** 🕒 - Smooth out your application's performance by managing function calls with debouncing and throttling techniques.
  
- **[LocalSafe](https://www.npmjs.com/package/localsafe)** 🔒 - Securely store sensitive data locally in the user's browser with encryption and other protective measures.
  
- **[Online Status JS](https://www.npmjs.com/package/online-status-js)** 🌐 - Keep track of your user's online status and enhance your application's real-time capabilities.

🌟 Made with ❤️ by Ashish