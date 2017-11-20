export interface IGreeter {
    greet(name: string): void;
}
export declare class ConsoleGreeter implements IGreeter {
    greet(name: string): void;
}
export declare class DOMGreeter implements IGreeter {
    greet(name: string): void;
}
