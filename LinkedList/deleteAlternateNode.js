// https://www.geeksforgeeks.org/delete-alternate-nodes-of-a-linked-list/

function deleteAlternateNode(list){
    let temp=list.head;
    let count=0;
    let updatedList =new InitalInsertion();
    while(temp!=null){
        if(count%2===0){
            updatedList.insert(temp.data)
        }
        count++;
        temp=temp.next;
    }
    return updatedList;
  }

//   1->2->3->4->5 => 1->3->5, 
//    1->2->3->4 => to 1->3.