import { ColorPreview } from "../color-preview";

import {fixture, assert} from '@open-wc/testing';

import {html} from 'lit/static-html.js';

suite('color-preview', () => {

  test('is defined', () => {
    const el = document.createElement('color-preview');
    assert.instanceOf(el, ColorPreview);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<color-preview></color-preview>`);

    assert.shadowDom.equal(
      el,
      `
      <div class="color-preview">
        <div class="input-container">
          <label for="hex_input">Add Hex Code:</label>
          <input type="text" id="hex_input">
          <button>Submit</button>
        </div>
      </div>
    `);
  });

});