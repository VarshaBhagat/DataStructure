class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

// insert in empty list
class CircularList{
    insertInEmpty(data){
        let lastNode=new Node(data);
        lastNode.next=lastNode;
        return lastNode;
    }
     insertInBegining(lastNode,data){
        let temp=new Node(data);
        temp.next=lastNode.next;
        lastNode.next=temp;
        lastNode=temp;
        return lastNode;
    }

    insertInEnd(lastNode,data){
        let temp=new Node(data);
        temp.next=lastNode.next;
        lastNode.next=temp;
        return lastNode;
    }

    insertAfter(lastNode,item, data) {
        let  head=lastNode;
        let search;
        do {
            if(head.data===item) {
               let temp= new Node(data);
               temp.next=head.next;
               head.next=temp;
            }
            head=head.next;
        } while(head!=lastNode)
       return lastNode;
    }

}