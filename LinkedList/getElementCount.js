
https://www.geeksforgeeks.org/write-a-function-that-counts-the-number-of-times-a-given-int-occurs-in-a-linked-list/
function getEleCount(list, ele){
    let temp=list.head;
    let count=0;
    while(temp!=null) {
         if(temp.data==ele){count++}
         temp=temp.next;
    }
    return count;
}

// 1->2->1->2->1->3->1 and given key is 1, then output should be 4.