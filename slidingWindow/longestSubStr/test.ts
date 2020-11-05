import { longestSubStr } from './longestSubStr';


test.only('longestSubStr', () => {
  expect(longestSubStr ('rithmschool')).toBe(7);
});

test.only('longestSubStr', () => {
  expect(longestSubStr ('thisisawesome')).toBe(6);
});

test.only('longestSubStr', () => {
  expect(longestSubStr ('thecatinthehat')).toBe(7);
});

test.only('longestSubStr', () => {
  expect(longestSubStr ('bbbbbbb')).toBe(1);
});
