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

     .hex-preview-box {
       margin-top: 12px;
       width: 75px;
       height: 75px;
     }
   `;

  @property({ type: String })
  userColor = '';

  override render() {
    return html`
    <div class="color-preview">
      <div class="input-container">
        <label for="hex_input">Add Hex Code:</label>
        <input type="text" id="hex_input">
        <button @click="${this.onHexcodeSubmit}">Submit</button>
      </div>
      ${this.userColor === '' ? '' : html`<div style="background-color: ${this.userColor}" id="thing" class="hex-preview-box"></div>`}
    </div>
     `;
  }

  onHexcodeSubmit() {
    const inputValue = this.shadowRoot?.querySelector('input')?.value;
    this.userColor = !inputValue || inputValue.trim() === '' ? '' : inputValue;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'color-preview': ColorPreview;
  }
}
