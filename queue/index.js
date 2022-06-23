// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(number) {
    this.data.push(number);
  }

  remove() {
    return this.data.shift();
  }
}

class Queue1 {
  constructor() {
    this.data = [];
  }

  add(number) {
    this.data.unshift(number);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue1;
