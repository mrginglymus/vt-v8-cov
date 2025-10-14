import {it, expect} from 'vitest';
import getReact from './src.js';

it('works', () => {
  expect(getReact().version).toBe('19.2.0')
})
