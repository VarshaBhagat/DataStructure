// https://practice.geeksforgeeks.org/problems/series-ap/0
function AP(firstLetterSeries, sectLetterSeries, n) {

    let a=firstLetterSeries;
    let d=sectLetterSeries - firstLetterSeries;
    return a+((n-1)*d)

}

// AP(2,3,4)
// 5
// AP(1,2,10)
// 10