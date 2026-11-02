// utils.js: this file SHARES two things with other files

// Named export: other files import it by name, in { braces }
export const add = (a, b) => a + b;

// Default export: only one per file, other files can name it anything
export default function hello(name) {
  return `Hello ${name}`;
}
