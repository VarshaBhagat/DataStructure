function uniqueArr(arr) {

    let hasMap={};
    let unique=[];
    for(let i=0;i<arr.length;i++) {
        if(!hasMap.hasOwnProperty(arr[i])) {
            unique.push(arr[i]);
            hasMap[arr[i]]=arr[i];
        }
    }
    return unique;
}
undefined
uniqueArr([1, 2, 3, 5, 1, 5, 9, 1, 2, 8])
(6) [1, 2, 3, 5, 9, 8]