import {it, expect} from 'vitest';
import getHello from './src';

it('works', () => {
  expect(getHello()).toBe('hello')
})
