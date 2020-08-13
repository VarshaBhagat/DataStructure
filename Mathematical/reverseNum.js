function reverseNum(num) {
    let rev=0
    while(num>0) {
        rev=rev*10;
        rev=rev+num%10;
        num=Math.floor(num/10);
    }
    return rev;
}

// reverseNum(200)
// 2
// reverseNum(122)
// 221