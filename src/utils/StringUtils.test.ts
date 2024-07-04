import { expect, test } from 'vitest';
import { toDateTime } from './StringUtils';

test('it can display a date time string correctly', () => {
  expect(toDateTime(new Date(0))).toBe('1970-01-01T00:00:00.000Z');
});
