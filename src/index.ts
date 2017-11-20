export interface IGreeter {
  greet(name: string): void;
}

export class ConsoleGreeter {
  greet(name: string) {
    console.log(`Hello, ${name}`);
  }
}

export class DOMGreeter {
  greet(name: string) {
    document.write(`Hello, ${name}`);
  }
}
