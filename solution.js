// Problem 1: Staircase solution
var staircase = function(n) {
    let num = n;
    for (let i = 1; i <= num; i++) {
        
        let hashes = '#'.repeat(i);
        console.log( hashes);
    }

};

//Problem 2: Grading Students solution
var gradingStudents = function(grades) {
  return grades.map(grade => {
    const remainder = grade % 5;
    const difference = 5 - remainder;

    if (grade < 38 || difference >= 3) {
      return grade; 
    } else {
      return grade + difference; 
    }
  });

};


// Problem 3: Time Conversion solution
var timeConversion = function(s) {
const AmPm = s.slice(-2).toUpperCase();
const time = s.slice(0, -2);
let [hours, minutes, seconds] = time.split(':');
let hoursInt = parseInt(hours, 10);
    if (AmPm === 'PM' && hoursInt < 12) {
        hoursInt += 12; // e.g., 07 PM becomes 19
    } else if (AmPm === 'AM' && hoursInt === 12) {
        hoursInt = 0;   // e.g., 12 AM becomes 00
    }
        const hours24 = String(hoursInt).padStart(2, '0');
            return `${hours24}:${minutes}:${seconds}`;

};


//console.log(timeConversion("12:30:45PM"))

//Problem 4: String Repeat solution
var repeatStr = function(n, s) {
  if (n===0) return (" ")
    let result = ""
  for (let i = 0; i < n; i++) {
   result = result + s
   
    
  }

  return result

};

//console.log(repeatStr(3,"ha"))

//Problem 5: Reversed Strings solution
var solution = function(str) {
      return str.split('').reverse().join('');

};

//console.log(solution("ha"))


//Problem 6: Sum of Positive solution

var positiveSum = function(arr) {
  const positiveNumber = arr.filter(num => num >0).reduce((acc, curr) => acc + curr, 0);
  return positiveNumber

};

//console.log(positiveSum([-1, -2, 0, -5]))



//Problem 7: Grasshopper — Summation solution
var summation = function(num) {
  let result = 0;

  for (let i = 0; i <= num; i++) {
    result = result + i
    
  }

  return result

};

//console.log(summation(8))

//Problem 8: Convert a Boolean to a String solution
var booleanToString = function(b) {
  if (b){
    return "true"
  }else{
    return "false"
  }

};

//console.log(booleanToString(false))

//Problem 9: Fizz Buzz solution
var fizzBuzz = function(n) {
  let result = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      result.push("FizzBuzz")
    }else if (i % 3 === 0){
      result.push( "Fizz")
    }else if (i % 5 === 0 ){
      result.push("Buzz")
    }else{
      result.push(String(i))
    }
    
    
  }

  return result

};

//console.log(fizzBuzz(5))


//Problem 10: Running Sum of 1D Array solution

var runningSum = function(nums) {
   let result = [];
  let currentSum = 0;

 for (let i = 0; i < nums.length; i++) {
       currentSum += nums[i];
           result.push(currentSum);
  
 }

 return result

};

//console.log(runningSum([1, 2, 3, 4]))

//Problem 11: Richest Customer Wealth solution

var maximumWealth = function(accounts) {
    const wealthTotals = accounts.map(customer => 
    customer.reduce((total, bank) => total + bank, 0)
  );
    return Math.max(...wealthTotals);
};

//console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))


//Problem 12: Remove Duplicates from Sorted Array solution
var removeDuplicates = function(nums) {
  const unique = [...new Set(nums)]
  return unique

};

//console.log( removeDuplicates( [1, 1, 2])) 


//Problem 13: Contains Duplicate solution
var containsDuplicate = function(nums) {
      return new Set(nums).size !== nums.length;
};
//console.log(containsDuplicate([1, 2, 3, 1]));


//Problem 14: Move Zeroes solution
var moveZeroes = function(nums) {
      let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }

};

// let nums = [0, 0, 1];

// moveZeroes(nums);
// console.log(nums); 

//Problem 15: Merge Sorted Array solution
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
// let nums1 =  [1];
// let m = 1;

// let nums2 = [];
// let n = 0;

// merge(nums1, m, nums2, n);

// console.log(nums1); 

//Problem 16: 3Sum solution
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

//console.log(threeSum( [0, 0, 0]));

//Problem 17: Plus One solution
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;


};

//console.log(plusOne( [1, 2, 9]))

//Problem 18: Reverse String solution
var reverseString = function(s) {
  let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }


};
// let a = ["H", "a", "n", "n", "a", "h"]
// reverseString(a)
// console.log(a)

//Problem 19: Length of Last Word solution
var lengthOfLastWord = function(s) {
 return s.trim().split(" ").pop().length;
};

//console.log(lengthOfLastWord("Hello World"))

//Problem 20: Longest Common Prefix solution
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }

    return prefix;

};

//console.log(longestCommonPrefix(["flower", "flow", "flight"]))