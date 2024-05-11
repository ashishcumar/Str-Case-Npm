// Function to convert string to lowercase
function toLowerCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  return str.toLowerCase();
}

// Function to convert string to uppercase
function toUpperCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.toUpperCase();
}

// Function to convert string to title case
function toTitleCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

// Function to convert string to sentence case
function toSentenceCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to convert string to camel case
function toCamelCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
}

// Function to convert string to snake case
function toSnakeCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.replace(/\s/g, "_");
}

// Function to convert string to kebab case
function toKebabCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.replace(/\s/g, "-");
}

// Function to convert string to pascal case
function toPascalCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str
    .replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    })
    .replace(/\s/g, "");
}

// Function to convert string to constant case (UPPERCASE_SNAKE_CASE)
function toConstantCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.replace(/\s/g, "_").toUpperCase();
}

// Function to convert string to dot case (lowercase.dot.case)
function toDotCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.replace(/\s/g, ".");
}

// Function to convert string to path case (lowercase/path/case)
function toPathCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  str = toLowerCase(str); // Convert to lowercase first
  return str.replace(/\s/g, "/");
}

// Function to convert string to alternating case
function toAlternatingCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  return str
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

// Function to convert string to inverted case
function toInvertedCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// Function to convert string to sponge case
function toSpongeCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  return str
    .split("")
    .map((char) =>
      Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

// Function to convert string to reverse case
function toReverseCase(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .reverse()
    .join("");
}

// Function to convert string to small caps
function toSmallCaps(str: string) {
  if (!str) throw new Error("String cannot be empty");
  if (typeof str !== "string") throw new TypeError("String must be a string");
  const smallCapsMap: { [key: string]: string } = {
    A: "ᴀ",
    B: "ʙ",
    C: "ᴄ",
    D: "ᴅ",
    E: "ᴇ",
    F: "ғ",
    G: "ɢ",
    H: "ʜ",
    I: "ɪ",
    J: "ᴊ",
    K: "ᴋ",
    L: "ʟ",
    M: "ᴍ",
    N: "ɴ",
    O: "ᴏ",
    P: "ᴘ",
    Q: "ǫ",
    R: "ʀ",
    S: "s",
    T: "ᴛ",
    U: "ᴜ",
    V: "ᴠ",
    W: "ᴡ",
    X: "x",
    Y: "ʏ",
    Z: "ᴢ",
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ғ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
    " ": " ",
  };

  return str
    .split("")
    .map((char) => smallCapsMap[char] || char)
    .join("");
}


export {
  toLowerCase,
  toUpperCase,
  toTitleCase,
  toSentenceCase,
  toCamelCase,
  toSnakeCase,
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
}