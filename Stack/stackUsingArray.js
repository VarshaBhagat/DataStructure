// class Stack {
//     constructor() {
//         this.data=[];
//     }

//     push(item){
//         this.data.push(item);
//     }

//     pop(){
//         return this.data.pop();
//     }

//     peek() {
//         return this.data[this.data.length-1]
//     }

//     isEmpty() {
//         return this.data.length === 0

//     }
    
// }
class Stack {
    constructor() {
​
        this.item=[]
    }
    isEmpty() {
​
        return !Boolean(this.item.length)
    }
    push(n) {
        this.item[this.item.length]=n;
    }
    pop() {
        return this.item.pop()
    }
    size(){
        return this.item.length;
    }
​
    peek() {
​
return this.item[this.item.length-1];
        }
}


// let stack = new Stack()
// stack.push(5)
// stack.pop()
// stack.peek()
// stack.isEmpty()
