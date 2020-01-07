/**
 * linked list
 */

 // class for one node

 class Node {
     constructor(data, next = null){
        this.data = data;
        this.next = next;
     }
 }

//  const n1 = new Node(200);
//  console.log(n1);

 // class for linked list 

 class LinkedList {
     constructor(){
         this.head = null;
         this.size = 0;
     }

     //Insert first node
     insertFirstNode(data){
        this.head = new Node(data, this.head);
        this.size++
     }
     

     //insert last node
     insertLastNode(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        }
        
            current = this.head;
            while(current.next){
                current = current.next
        }
        current.next = node;
     
     this.size++
    }

     //inset at index
     insertAt(data, index){
         // if index is out of range
         if(index > 0 && index > this.size){
             return;
         }
         // if first index
         if(index === 0){
             this.head = new Node(data, this.head);;
             return;
         }
         //else 
         const node = new Node(data);
         let current, previous;
         
         // set current to first
         current = this.head;
          let count = 0;
          while(count < index){
            previous = current; // node before index
            count++
            current = current.next; //node after index
          }

          node.next = current;
          previous.next = node;
          this.size++

     }
     // Get at index
     getAt(index){
         let current = this.head;
         let count = 0

         while(current){
            if(index === count){
                console.log('position ++', current.data);
            }
            count++
            current = current.next;
         }
         return null;

     }

     //remove at index
     removeAt(index){
         if(index > 0 && index > this.size){
             return;
         }
         let current = this.head;
         let previous;
         let count = 0;

         //remove first
         if(index === 0){
             this.head = current.next
         }else{
             while(count < index){
                previous = current
                current = current.next;
                count++
             }
             previous.next = current.next
         }
         this.size--
     }

     // clear a list
     clearList(){
         this.head = null;
         this.size = 0;
     }

     //Print all values of a list
     printListData(){
         let current = this.head;
         while(current){
            console.log(current.data);
            current = current.next;
         }
         
     }
 }

 const list = new LinkedList();


 
// list.insertFirstNode(300)
// list.insertFirstNode(400)
list.insertFirstNode(500)
list.insertFirstNode(600)
list.insertLastNode(100);
list.insertAt(899, 1);
// list.getAt(10);
// list.removeAt(2)
// list.clearList();


list.printListData();
console.log(list);
