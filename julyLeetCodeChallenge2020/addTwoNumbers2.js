/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = listToArray(l1);
    let num2 = listToArray(l2);

    let i = num1.length - 1;
    let j = num2.length - 1;
    let newArr = [];
    let carry = 0;

    while (i > -1 || j > -1) {
        if (i > -1 && j > -1) {
            let total = num1[i] + num2[j] + carry;
            carry = 0;
            if (total > 9) {
                remainder = total % 10;
                newArr.unshift(remainder);
                carry = 1;
            } else {
                newArr.unshift(total)
            }
        } else if (i > -1) {
            if (num1[i] + carry === 10) {
                newArr.unshift(0);
            } else {
                newArr.unshift(num1[i] + carry);
                carry = 0;
            }
        } else if (j > -1) {
            if (num2[j] + carry === 10) {
                newArr.unshift(0);
            } else {
                newArr.unshift(num2[j] + carry);
                carry = 0;
            }
        }
        i--;
        j--;
    }

    if (carry) {
        newArr.unshift(1);
    }

    return arrayToList(newArr);
};

var listToArray = function (list) {
    let arr = []
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
};

var arrayToList = function (arr) {
    let node, temp;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!node)
            node = new ListNode(arr[i]);
        else {
            temp = new ListNode(arr[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
};