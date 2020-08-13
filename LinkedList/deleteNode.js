// https://www.geeksforgeeks.org/linked-list-set-3-deleting-node/
class Node {
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }
    insert(data){
        let node= new Node(data);

        // insert at first
        if(this.head===null){
            this.head=node;
        } 
        // insert at last
        else{
            let firstNode=this.head;
            while(this.head.next!=null){
                this.head=this.head.next;
            }
            this.head.next=node;
            this.head=firstNode;
        }
    }
    delete(data){
        if(this.head.data===data){
            this.head=this.head.next;
        } else {
        let temp= this.head;
        let prev;
        while(temp.data !=data) {
            prev = temp;
            temp=temp.next;
        }
        prev.next=temp.next;  
        }
    }
}