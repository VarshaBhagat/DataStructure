// https://www.geeksforgeeks.org/write-a-function-to-get-nth-node-in-a-linked-list/

function getNthNode(list, node) {
    temp=list.head;
    while(temp!=null && node) {
        temp=temp.next;
        node=node-1;
    }
    return temp;

}

// getNthNode(list, 3)
// Node {data: 23, next: null}


// Another way

function getNthNode(list, node) {
    let temp=list.head;
    let count=0;
    while(temp!=null) {
        if(count==node) { return temp.data;}
        temp=temp.next;
        count++;
    }
}

// getNthNode(list, 3)
// Node {data: 23, next: null}