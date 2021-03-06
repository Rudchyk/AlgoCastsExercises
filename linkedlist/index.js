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
    this.counter = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    // let size = 0;
    // const getSize = (head) => {
    //   if (head?.data) {
    //     size++;
    //     getSize(head.next);
    //   }
    // };
    // getSize(this.head);

    // return size;

    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  // @my
  // getLast(head = this.head) {
  //   if (!head) {
  //     return this.head;
  //   } else if (head.next === null) {
  //     return head;
  //   } else {
  //     return this.getLast(head.next);
  //   }
  // }
  getLast() {
    // #1
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;

    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    // do {
    //   if (node.next === null) {
    //     return node;
    //   }
    //   node = node.next;
    // } while (node);

    // #2
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // @my
  // removeLast(head = this.head) {
  //   if (!head) {
  //     return;
  //   }

  //   if (this.size() === 1) {
  //     this.head = null;
  //     return;
  //   }

  //   if (head.next.next === null) {
  //     head.next = null;
  //   } else {
  //     return this.removeLast(head.next);
  //   }
  // }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    // let previous = this.head;
    // let node = this.head.next;

    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }

    // previous.next = null;

    let node = this.head;
    do {
      if (node.next.next === null) {
        node.next = null;
      }
      node = node.next;
    } while (node);
  }

  insertLast(data) {
    const last = this.getLast();

    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  // @my
  // getAt(index) {
  //   let counter = -1;
  //   const getByIndex = (head) => {
  //     if (head?.data) {
  //       counter++;

  //       if (index === counter) {
  //         return head;
  //       } else {
  //         return getByIndex(head.next);
  //       }
  //     }
  //   };

  //   return getByIndex(this.head) || null;
  // }
  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  // @my
  // removeAt(index) {
  //   let counter = -1;

  //   if (index === 0) {
  //     if (this.head?.next) {
  //       this.head = this.head.next;
  //     } else {
  //       this.head = null;
  //     }
  //     return;
  //   }

  //   const getByIndex = (head = this.head) => {
  //     if (head?.data) {
  //       counter++;

  //       if (index === counter + 1) {
  //         head.next = head.next?.next || null;
  //       } else {
  //         return getByIndex(head.next);
  //       }
  //     }
  //   };

  //   getByIndex();
  // }
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  // @my
  // insertAt(data, index) {
  //   let counter = -1;
  //   const getByIndex = (head) => {
  //     counter++;

  //     if (index === counter) {
  //       if (head === null) {
  //         this.head = new Node(data);
  //       } else {
  //         const node = { ...head };
  //         head.data = data;
  //         head.next = node;
  //       }
  //       return;
  //     }

  //     if (head.next !== null) {
  //       getByIndex(head.next);
  //     } else {
  //       this.insertLast(data);
  //     }
  //   };
  //   getByIndex(this.head);
  // }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);

    previous.next = node;
  }

  // @my
  // forEach(cb) {
  //   const loop = (head) => {
  //     cb(head);

  //     if (head.next === null) {
  //       return;
  //     } else {
  //       loop(head.next);
  //     }
  //   };

  //   loop(this.head);
  // }
  forEach(cb) {
    let node = this.head;
    let counter = 0;

    while (node) {
      cb(node, counter);
      node = node.next;
      counter++;
    }
  }

  //my
  // next() {
  //   const item = this.getAt(this.counter);
  //   this.counter++;

  //   return this.counter <= this.size()
  //     ? {
  //         value: item,
  //         done: false,
  //       }
  //     : {
  //         done: true,
  //       };
  // }

  // [Symbol.iterator]() {
  //   return this;
  // }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
