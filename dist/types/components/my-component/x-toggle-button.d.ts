import '../../stencil.core';
export declare class MyComponent {
    checkbox: HTMLInputElement;
    background: HTMLSpanElement;
    type: string;
    checkedColor: string;
    uncheckedColor: string;
    checked: boolean;
    componentDidLoad(): void;
    toggleSwitch(): void;
    render(): JSX.Element;
}
