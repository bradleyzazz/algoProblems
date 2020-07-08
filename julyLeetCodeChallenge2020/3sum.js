const threeSum = nums => {
    nums.sort((a, b) => a - b);
    const threeSums = [];

    for (let i = 0; i < nums.length - 2; i++) {
        findSums(i, nums, threeSums);
    }

    return threeSums;
}

const findSums = (currIdx, nums, threeSums) => {
    if (nums[currIdx] === nums[currIdx - 1]) return;
    let left = currIdx + 1;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[currIdx] + nums[left] + nums[right];

        if (sum === 0) {
            threeSums.push([nums[currIdx], nums[left], nums[right]]);
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