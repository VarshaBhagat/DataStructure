// https://practice.geeksforgeeks.org/problems/series-gp/0
function GP(firstLetterSeries, sectLetterSeries, n) {
    let a=firstLetterSeries;
    let r=sectLetterSeries/firstLetterSeries;
    return Math.floor(a*Math.pow(r,n-1));

}

// GP(2,3,1)
// 2
// GP(1,2,2)
// 2