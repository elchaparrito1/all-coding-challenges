import { maxSubArray } from './maxSubArray';


test.only('maxSubArray', () => {
  expect(maxSubArray (3, [2, 1, 5, 1, 3, 2])).toBe(9);
});

test.only('maxSubArray', () => {
  expect(maxSubArray (2, [2, 3, 4, 1, 5])).toBe(7);
});

