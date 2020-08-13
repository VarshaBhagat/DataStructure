//https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
// create loop list.head.next.next.next=list.head
function detectLoop(list) {
    let temp=list.head;
    let setData= new Set()
    while(temp!=null){
        if(setData.has(temp)) return true;
        setData.add(temp);
        temp=temp.next;
    }
    return false;
}

// detectLoop(list2) false
// detectLoop(list) true