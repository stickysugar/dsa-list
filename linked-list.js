/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //set new node
    //look for the end of the list
    //update next to new node
    //set tail to new node

    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //set new node
    //look for head, set newnode.next to current head
    //update head to new node

    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;

    newNode.next = this.head;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    //traverse thru list, find penultimate node
    //set tail to that node, set next to null
    if (this.head === null) throw new Error;

    let current = this.head;

    while (current !== null) {
      if (current.next.next === null) {
        current.next = null;
        this.tail = current;
        return current;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    //find head, set head to next
    //set removed item to null

    if (this.head === null) throw new Error;

    let removed = this.head;
    this.head = removed.next;
    removed.next = null;

    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //set count
    //traverse thru list, increase count, stop at idx return val

    if (this.head === null) throw new Error;
    if (idx < 0) throw new Error;

    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === idx) {
        return current.val;
      }
      count++;
      current = current.next;
    }

    throw new Error;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //   107 |     expect(lst.head.next.val).toBe(10);
    //   108 |     expect(lst.tail.val).toBe(10);
    // > 109 |     expect(lst.length).toBe(2);
    //set count
    //traverse thru list, increase count, stop at idx, set newval

    if (this.head === null) throw new Error;
    if (idx < 0) throw new Error;

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === idx) {
        current.val = val;
        return current;
      }
      count++;
      current = current.next;
    }

    if (idx > count) throw new Error;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //create new node
    //set count
    //traverse thru list, increase count, stop at idx-1
    //set newnode's next to current.next
    //set next to new node

    if (idx < 0) throw new Error;

    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === idx - 1) {
        newNode.next = current.next;
        current.next = newNode;
      }
      count++;
      current = current.next;
    }
    if (idx > count) throw new Error;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
