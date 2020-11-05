//Challenge #01 Solution:
const max_sub_array_of_size_k_solution = function(k: number, arr: number[]) {
  // TODO: Write your code here
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
};




//Challenge #02 Solution:
const smallest_subarray_with_given_sum_solution = function(s:number, arr: number[]) {
  // TODO: Write your code here
  let windowStart = 0,
  minSum = 0,
  subArrayLen = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    minSum += arr[windowEnd];

    while (minSum >= s) {
      subArrayLen = Math.min(subArrayLen, windowEnd - windowStart + 1);
      minSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (subArrayLen === Infinity) return 0;

  return subArrayLen;
};




//Challenge #03 Solution:
   const longest_substring_with_k_distinct_solution = function(str: string, k: number) {
    // TODO: Write your code here
    let windowStart = 0,
    hashMap = {},
    maxLength = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if(!(rightChar in hashMap)) {
        hashMap[rightChar] = 0;
      } 

      hashMap[rightChar] += 1;
      while (Object.keys(hashMap).length > k) {
        const leftChar = str[windowStart];
        hashMap[leftChar] -= 1;
        if (hashMap[leftChar] === 0) {
          delete hashMap[leftChar]
        }
        windowStart++
      }

      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
  };



  //Challenge #04 Solution:
  const findMaxConsecutiveOnes_solution = (nums) => {
    let windowStart = 0,
        maxLength = null,
        oneCount = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === 1) {
            oneCount++
        } else if (nums[windowEnd] === 0) {
            windowStart = windowEnd;
            maxLength = Math.max(maxLength, oneCount);
            oneCount = 0;
        }
      
      maxLength = Math.max(maxLength, oneCount);
    }
    
    return maxLength;
  };