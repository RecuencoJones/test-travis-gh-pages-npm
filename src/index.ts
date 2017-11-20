export interface IGreeter {
  greet(name: string): void;
}

export class ConsoleGreeter implements IGreeter {
  greet(name: string) {
    console.log(`Hello, ${name}`);
  }
}

export class DOMGreeter implements IGreeter {
  greet(name: string) {
    document.write(`Hello, ${name}`);
  }
}
