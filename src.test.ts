import {it, expect} from 'vitest';
import broken, {working} from './src';

it('doesn\'t work', () => {
  expect(broken()).toBe('hello')
})

it('works', () => {
  expect(working()).toBe('hello')
})
