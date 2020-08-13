// https://practice.geeksforgeeks.org/problems/print-the-kth-digit/0

function printKthDigit(num1,num2, k) {
    let r;
    num=Math.pow(num1,num2);
    while(k) {
        r=num%10;
        num=Math.floor(num/10);
        k--;
    }
    return r;
}


// printKthDigit(3,3,1)
// 7
// printKthDigit(5,2,2)
// 2