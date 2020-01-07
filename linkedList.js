/**
 * Linked list has nodes
 * nodes have two parts - data and next
 * It  also has a head and a tail
 * next of the head points to the next node in a list and 
 * next of a tail points to null
 */

 // Class for a node
class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next
    }
}

// instantiate one node
// const n1 = new Node(21);
// console.log(n1);

// make a linkedList
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert fist node
    insertFirstNode(data){
        this.head = new Node(data, this.head);
        this.size++
    }

    //insert last node
    insertLastNode(data){
        const node = new Node(data);
        let current;
        current = this.head;
        // check for whether the list is empty
        if(!this.head){
            this.head = node;
            // return;
        }
        else{
        while(current.next){
            current = current.next;
        }
        current.next = node;
        this.size++
        }
    }

    // Print data Elements
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    // insert at
    insertAt(data, index){
        const node = new Node(data);
        let current, previous;
        let count = 0;
        current = this.head;
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        else if(index > 0 && index > this.size){
            return;
        }
        else{
            
            while(count < index){
                previous = current;
                current = current.next;
                count++
            }
            node.next = current;
            previous.next = node
        } 
    }

    //get index at
    getAt(index){
        let current =this.head;
        let count = 0;
        while(current){
            if(count === index){
                console.log("at  ++++", current.data)
            }
            count++
            current = current.next;
        }
    }

    // remove at
    removeAt(index){
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head.data = this.head.next;
            console.log('this.head +++', this.head);
            return;
        }
        if(index > 0 && index > this.size){
            return;
        }
        while(count < index){
            previous = current;
            console.log("previous ++++", previous);
            count++
            current = current.next
            console.log("current ++++", current);
        }
        previous.next = current.next
        this.size--
    }

    //clear list
    clearList(){
        this.head = null;
        this.size = 0;
        return;
    }
}

// Instantiate a Linked list
const list = new LinkedList();

// insert first node
// list.insertFirstNode(10)
list.insertFirstNode(20)
list.insertFirstNode(30)
list.insertLastNode(2)
list.insertAt(500, 1)
// list.getAt(1)
list.removeAt(3)
list.clearList()

list.printListData()

console.log('list >>>>>>', list);