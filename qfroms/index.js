// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(record) {
    this.stack1.push(record);

    while (this.stack2.peek()) {
      this.stack2.pop();
    }

    for (let i = this.stack1.data.length; i > 0; i--) {
      const b = this.stack1.data[i - 1];
      this.stack2.push(b);
    }
  }

  remove() {
    const element = this.stack2.pop();

    while (this.stack1.peek()) {
      this.stack1.pop();
    }

    for (let i = this.stack2.data.length; i > 0; i--) {
      const b = this.stack2.data[i - 1];
      this.stack1.push(b);
    }

    return element;
  }

  peek() {
    return this.stack2.data[this.stack2.data.length - 1];
  }
}

module.exports = Queue;
