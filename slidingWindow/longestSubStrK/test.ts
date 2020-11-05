import { longest_substring_with_k_distinct } from './longestSubStrK';


test.only('longest_substring_with_k_distinct', () => {
  expect(longest_substring_with_k_distinct ("araaci", 2)).toBe(4);
});

test.only('longest_substring_with_k_distinct', () => {
  expect(longest_substring_with_k_distinct ("araaci", 1)).toBe(2);
});

test.only('longest_substring_with_k_distinct', () => {
  expect(longest_substring_with_k_distinct ("cbbebi", 3)).toBe(5);
});
