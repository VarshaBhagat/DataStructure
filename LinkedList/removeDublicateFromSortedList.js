// https://www.geeksforgeeks.org/remove-duplicates-from-a-sorted-linked-list/

function removeDublicateFromSorted(list){
    let temp=list.head;
    let sortedList= new InitalInsertion();
    while(temp!=null){
        if( temp.next && temp.data!==temp.next.data){
        sortedList.insert(temp.data);
        } 
            temp=temp.next;
        if(temp&& temp.next===null) {sortedList.insert(temp.data);}
    }
    return sortedList;
  }


// 11->11->11->21->43->43->60 => 11->21->43->60.