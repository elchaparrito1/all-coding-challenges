import { smallestSubArrayGivenSum } from './smallestSubArrayGivenSum';

test.only('smallestSubArrayGivenSum', () => {
  expect(smallestSubArrayGivenSum(7, [2, 1, 5, 2, 3, 2])).toBe(2);
});

test.only('smallestSubArrayGivenSum', () => {
  expect(smallestSubArrayGivenSum(7, [2, 1, 5, 2, 8])).toBe(1);
});

test.only('smallestSubArrayGivenSum', () => {
  expect(smallestSubArrayGivenSum(8, [3, 4, 1, 1, 6])).toBe(3);
});