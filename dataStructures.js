//Activity 1: Linked List
//Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  remove() {
    if (this.head === null) return null;
    let current = this.head;
    if (current.next === null) {
      this.head = null;
    } else {
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();
list.remove();
list.print();

//Activity 2: Stack
//Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return "No element in the stack";
    return this.items[this.items.length - 1];
  }

  print() {
    console.log(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(20);
stack.push(100);
stack.push(2003);
stack.print();
console.log(stack.peek());
stack.pop();
stack.peek();
stack.push(900);
stack.push(1000);
stack.push(7388);
stack.print();
// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverseString("hello"));

//Activity 3: Queue
//Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }
  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.items.length === 0) return "No item in the queue";
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.front());
queue.dequeue();
queue.dequeue();

//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
queue.enqueue("Print job 1");
queue.enqueue("Print job 2");
queue.enqueue("Print job 3");
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();

//Activity 4: Binary Tree
//Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new TreeNode(data);
    } else {
      function insert(node) {
        if (data < node.value) {
          if (node.left === null) {
            node.left = new TreeNode(data);
          } else if (node.left !== null) {
            insert(node.left);
          }
        } else if (data > node.value) {
          if (node.right === null) {
            node.right = new TreeNode(data);
          } else if (node.right !== null) {
            insert(node.right);
          }
        } else {
          return null;
        }
      }
      insert(node);
    }
  }

  binaryTraverse() {
    const result = [];
    const node = this.root;
    return this.traverse(node, result);
  }

  traverse(node, result) {
    if (node !== null) {
      this.traverse(node.left, result);
      result.push(node.value);
      this.traverse(node.right, result);
    }
    return result;
  }
}

const tree = new BinaryTree();
tree.add(25);
tree.add(24);
tree.add(27);
tree.add(21);
tree.add(26);
tree.add(28);
console.log(tree.binaryTraverse());

//Activity 5: Graph (Optional)
//Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
//Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
