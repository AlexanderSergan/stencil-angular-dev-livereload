// LivinguiTextarea: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './livingui-textarea.core.js';
import {
  CwcTextarea
} from './livingui-textarea.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    CwcTextarea
  ], opts);
}