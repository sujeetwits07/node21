class Stack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
  }
  push(element) {
    if (this.stack.length == this.maxSize) {
      console.log("Stack is Full");
      return;
    }
    this.stack.push(element);
    console.log("Item added: " + element);
  }

  pop() {
    if (this.stack.length == 0) {
      console.log("Stack is Emptyt");
      return;
    }

    const poppedItem = this.stack.pop();
    console.log("Item popped: " + poppedItem);
    return poppedItem;
  }

  length() {
    return this.stack.length;
  }

  toString() {
    return this.stack;
  }
}

const stack = new Stack(3);
stack.push(10);
stack.push(50);
stack.push(45);
stack.pop();
console.log(stack.length());
