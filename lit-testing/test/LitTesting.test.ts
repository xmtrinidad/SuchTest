import type { IWindow } from 'happy-dom'
import { expect, it, describe } from 'vitest';
import { LitTesting } from '../src/LitTesting'

declare global {
  interface Window extends IWindow {}
}

describe('lit-testing', () => {

  it('is defined', () => {
    const element = document.createElement('lit-testing');
    expect(element).toBeInstanceOf(LitTesting);
  });

});

