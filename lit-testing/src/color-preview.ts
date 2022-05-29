/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('color-preview')
export class ColorPreview extends LitElement {
  static override styles = css`
     :host {
       display: block;
     }
   `;

  @property({ type: String })
  userColor = '#000000';

  override render() {
    return html`
    <div class="color-preview">
      <div class="input-container">
        <label for="hex_input">Add Hex Code:</label>
        <input type="text" id="hex_input">
        <button>Submit</button>
      </div>
    </div>
     `;
  }

  // private _onColorSubmit() {
  //   console.log('color preview submit works');
  // }

}

declare global {
  interface HTMLElementTagNameMap {
    'color-preview': ColorPreview;
  }
}
