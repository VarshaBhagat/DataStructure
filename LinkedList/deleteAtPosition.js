// https://www.geeksforgeeks.org/delete-a-linked-list-node-at-a-given-position/
/* Given a reference (pointer to pointer) to the head of a list 
   and a position, deletes the node at the given position */

function deletePosition(listHead, position) {
    let temp=listHead;
    let curPosition=0;
    if(position===curPosition){
        listHead=listHead.next;
    } else{
        let prev;
        let temp=listHead;
        while(curPosition!==position){
            prev=temp;
            temp=temp.next;
            curPosition++;
        }
        prev.next=temp.next;
    }
    return listHead;
}