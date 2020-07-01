
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    
    const count = {};
    
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    console.log(count)

    for  (let i = 0; i < nums.length; i++) {
        if (i < count[0]) {
            nums[i] = 0;
        } else if (i < ( count[1] || count[1] + count[0]) ){
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
};

let arr = [2,0,2,1,1,0];
let arr2 = [1, 1];
sortColors(arr2);
console.log(arr2);