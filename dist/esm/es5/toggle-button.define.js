// ToggleButton: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './toggle-button.core.js';
import {
  MyComponent
} from './toggle-button.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyComponent
  ], opts);
}