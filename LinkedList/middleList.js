// https://www.geeksforgeeks.org/check-whether-the-length-of-given-linked-list-is-even-or-odd/

function middle(list) {
    let temp=list.head;
    let mid=list.head;
    let count=0;
    while(temp!=null) {
        if(count%2 !=0){mid=mid.next;}
        temp=temp.next;
        count++;
    }
    return mid.data;
}

// Input : 1->2->3->4->NULL
// Output : Even

// Input : 1->2->3->4->5->NULL
// Output : Odd