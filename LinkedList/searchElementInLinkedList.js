
// https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/

function search(list, ele){
    temp=list.head;
    while(temp !=null){
        if(temp.data===ele){
            return 'found';
        }
        temp=temp.next;
    }
    return 'not found';
}

// search(list, 111) "found"
// search(list, 11) "not found"


function search(listHead, value){
    if (listHead == null) {
        return false; 
    }
    if(listHead.data===value){
        return true;
    }
    return search(listHead.next, value);
    
}

// search(list.head, 30)  // true
// search(list.head, 40) // false