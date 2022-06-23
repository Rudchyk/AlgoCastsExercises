// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    const getSize = (head) => {
      if (head?.data) {
        size++;
        getSize(head.next);
      }
    };
    getSize(this.head);

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast(head = this.head) {
    if (!head) {
      return this.head;
    } else if (head.next === null) {
      return head;
    } else {
      return this.getLast(head.next);
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast(head = this.head) {
    if (!head) {
      return;
    }

    if (this.size() === 1) {
      this.head = null;
      return;
    }

    if (head.next.next === null) {
      head.next = null;
    } else {
      return this.removeLast(head.next);
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(index) {
    let counter = -1;
    const getByIndex = (head) => {
      if (head?.data) {
        counter++;

        if (index === counter) {
          return head;
        } else {
          return getByIndex(head.next);
        }
      }
    };

    return getByIndex(this.head) || null;
  }

  removeAt(index) {
    let counter = -1;

    if (index === 0) {
      if (this.head?.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
      return;
    }

    const getByIndex = (head = this.head) => {
      if (head?.data) {
        counter++;

        if (index === counter + 1) {
          head.next = head.next?.next || null;
        } else {
          return getByIndex(head.next);
        }
      }
    };

    getByIndex();
  }

  insertAt(data, index) {
    let counter = -1;
    const getByIndex = (head) => {
      head;
      index;
      counter;
      if (head?.data) {
        counter++;

        if (index === counter) {
          head = new Node(data, head.next);
        } else {
          getByIndex(head.next);
        }
      } else {
        head = new Node(data);
      }
    };

    getByIndex(this.head);
  }
  // forEach() {}
  // size() {}
}

const list = new LinkedList();
list.insertFirst(1);
list.insertAt('Hi', 1);
const b1 = list.getAt(1);

list;
b1;

module.exports = { Node, LinkedList };
