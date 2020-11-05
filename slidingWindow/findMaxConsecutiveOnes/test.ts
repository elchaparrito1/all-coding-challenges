import { findMaxConsecutiveOnes } from './findMaxConsecutiveOnes';


test.only('findMaxConsecutiveOnes', () => {
  expect(findMaxConsecutiveOnes ([1,0,0,1,0,1,1,1,1])).toBe(4);
});

test.only('findMaxConsecutiveOnes', () => {
  expect(findMaxConsecutiveOnes ([0,0,1,1,0,0,1])).toBe(2);
});

test.only('findMaxConsecutiveOnes', () => {
  expect(findMaxConsecutiveOnes ([1,1,1,0,0,0,0,0,1,1,1,1,1])).toBe(5);
});

test.only('findMaxConsecutiveOnes', () => {
  expect(findMaxConsecutiveOnes ([0])).toBe(0);
});