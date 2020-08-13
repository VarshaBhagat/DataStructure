
// https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/

// getNthFromLastNode one way
function getNthFromLastNode(list, node) {
    let count=1;
    let temp=list.head;
    while(temp!=null) {
        temp=temp.next;
        count++;
    }
    let nodeRequired=count-node;
    console.log(nodeRequired, list.head)
    let temp1=list.head;
    let index=1;
       while(temp1!=null) {
        if(index===nodeRequired){return temp1.data;}
        temp1=temp1.next;
        index++;
    }
    return null;
}



//getNthFromLastNode one way
function getNthNode(list, node) {
    let temp=list.head;
    let count=1;
    while(temp!=null) {
        if(count==node) { return temp.data;}
        temp=temp.next;
        count++;
    }
}
function getNthFromLastNode(list, node) {
    let count=1;
    let temp=list.head;
    while(temp!=null) {
        temp=temp.next;
        count++;
    }
    let nodeRequired=count-node;
    return getNthNode(list, nodeRequired);
}