
https://practice.geeksforgeeks.org/problems/print-the-pattern-set-1/1
function pattern(n) {
    for(let k=n;k>=1;k--) {
        for(let i=n;i>=1;i--) {
            for(let j=1;j<=k;j++) {
                console.log(i)
        
            }
        }
        console.log('$')
    }
}


//pattern(3)
//3 3 3 2 2 2 1 1 1 $3 3 2 2 1 1 $3 2 1 $

//pattern(2)
//2 2 1 1 $2 1 $