//https://www.geeksforgeeks.org/segregate-even-and-odd-elements-in-a-linked-list/

function segregateEvenOddNodeList(list){
    let temp=list.head;
    let even= new InitalInsertion();
    let odd= new InitalInsertion();
    while(temp!=null) {
        if(temp.data%2==0){
          even.insert(temp.data)
        } else{
          odd.insert(temp.data)
         }
       temp=temp.next; 
    }
    if(even.head) {
        temp=even.head;
         while(temp.next!=null) {
          temp=temp.next; 
         }
        temp.next=odd.head;
    } else{
        even=odd
    }
    return even;
}

// segregateEvenOddNodeList(list)
// InitalInsertion {head: Node}
// Input: 17->15->8->12->10->5->4->1->7->6->NULL
// Output: 8->12->10->4->6->17->15->5->1->7->NULL
