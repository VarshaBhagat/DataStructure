function reveseString(str) {
    let content=str.split('');
    let stack =new Stack();
    let length=content.length;
    let data=[];
    for(let i=0;i<length;i++){
        stack.push(content[i]);
    }
    for(let i=0;i<length;i++){
        data.push(stack.pop());
    }
    return data.join("");
}

// reveseString("abc")
// "cba"