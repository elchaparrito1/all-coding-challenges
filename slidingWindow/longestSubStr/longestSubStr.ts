/*Challenge #05 - Write a function which accepts a string and returns
the length of the longest substring with all distinct characters*/
export const longestSubStr = (str: string) => {
  let windowStart = 0,
  hashMap = {},
  maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (!(rightChar in hashMap)) {
      hashMap[rightChar] = 0;
    }

    hashMap[rightChar] += 1;

    while (hashMap[rightChar] > 1) {
      let leftChar = str[windowStart];
      hashMap[leftChar] -= 1;
      if (hashMap[leftChar] === 0) delete hashMap[leftChar];
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}