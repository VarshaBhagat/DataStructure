// https://practice.geeksforgeeks.org/problems/armstrong-numbers/0
function amstrong(num) {
    let n=num;
    let sum=0;
    while(num>0) {
        r=num%10;
        sum+=Math.pow(r,3)
        num=Math.floor(num/10);
    }
    if(sum==n) {return "Yes"}
    return "No"

}


// amstrong(371)
// "Yes"
// amstrong(37)
// "No"
// amstrong(1)
// "Yes"