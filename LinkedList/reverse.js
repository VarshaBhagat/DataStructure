// https://www.geeksforgeeks.org/reverse-a-linked-list/

function convertArrayToList(arr) {
    if(arr.length===0) return null;
    let firstNode= new Node(arr[0])
    let temp=firstNode;
    head=temp;
    for(i=1;i<arr.length;i++){
        temp.next=new Node(arr[i]);
        temp=temp.next;
    }
    return head;
}

function conevrtListToArray(list) {
    let arr=[];
    temp=list.head;
    while(temp!=null) {
        arr.push(temp.data);
        temp=temp.next;
    }
    return arr;
}

function reverse(list){
    let temp=conevrtListToArray(list);
    temp.reverse();
    let list =convertArrayToList(temp)
    return list;
}

// reverse(list)