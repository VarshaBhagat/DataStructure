function traverse(list){
    let temp=list;
    do{
        console.log(temp.data)
        temp=temp.next;

    } while(temp!=list)
}