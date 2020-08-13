// https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class InitalInsertion {
    constructor() {
        this.head=null
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

    /* Given a node prev_node, insert a new node after the given 
   prev_node */
   insertAfterNode(prevNode, data){
    if(prevNode===null){
      console.log("prev node can not be null");
    } else {
      let firstNode= this.head;
      while(this.head.data!==prevNode.data){
        this.head=this.head.next;
      }
      let newNode=new Node(data);
      newNode.next=this.head.next;
      this.head.next=newNode;
      this.head=firstNode;
    }
  }
}


//
// let list = new InitalInsertion()
// list.insert(1)
//prevNode=new Node(3)
// list.insertAfterNode(prevNode, 4)