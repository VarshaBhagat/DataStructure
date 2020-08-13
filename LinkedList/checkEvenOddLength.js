//https://www.geeksforgeeks.org/check-whether-the-length-of-given-linked-list-is-even-or-odd/

function checkEvenOddLength(list) {
    let temp=list.head;
    let count=0;
    while(temp!=null){
        count++;
        temp=temp.next;
    }
    if(count%2===0) return 'Even';
    return 'Odd'
}

// 1->2->3->4->NULL
// checkEvenOddLength(list)
// "Even"

// 1->2->3->4->5->NULL
// checkEvenOddLength(list)
// "Odd"
