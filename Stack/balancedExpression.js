function balancedExpr(str) {
    let stack=[];
 for(let i=0;i<str.length;i++) {
     if((str[i]==='(') || (str[i]==='{')|| (str[i]==='(')) {
         stack.push(str[i])
     }
     if(i>0) { 
         switch(str[i]) {
             case ')': {
                 x=str[i-1];
                 stack.pop();
                 if (x=='{' || x=='[') return false;
                 break;
             }
             case '}': {
                 x=str[i-1];
                 stack.pop();
                 if (x=='(' || x=='[') return false; 
                 break;
             }
             case ']': {
                 x=str[i-1];
                 stack.pop();
                 if (x=='(' || x=='{') return false; 
                 break;
             }   
         }
     }
 }
 return stack.length===0
}

// balancedExpr('[(])')
// false
// balancedExpr('[()]{}{[()()]()}')
// true