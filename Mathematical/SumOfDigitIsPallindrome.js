// https://practice.geeksforgeeks.org/problems/sum-of-digit-is-pallindrome-or-not/0
function checkPalindrome(num) {
    if( num==(""+num).split("").reverse((a,b)=>a-b).join("")) {
         return true;
     }
     return false;
 
 }


 function digitSum(num) {
    let sum=0;
    while(num>0) {
        sum+=num%10;
        num=Math.floor(num/10);

    }
    return sum;
}


function sumOfDigitIsPallindrome(num) {
    num=digitSum(num);

    return checkPalindrome(num);
}

// sumOfDigitIsPallindrome(56)
// true
// sumOfDigitIsPallindrome(98)
// false