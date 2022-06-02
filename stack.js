class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  // push element to stack
  push(ele) {
    this.items[this.count] = ele;
    console.log(` ${ele} pushed to ${this.count}`);
    this.count++;
  }
  // pop element from stack
  pop() {
    if (this.count === 0) return;
    let removeEle = this.items[this.count - 1];
    this.count--;
    console.log(`removed => ${removeEle}`);
    return removeEle;
  }
  // check stack is empty
  isEmpty() {
    const checkEmpty =
      this.count === 0 ? "stack is empty" : "stack is not empty";
    console.log(checkEmpty);
  }
  // get Length  element stack
  length() {
    console.log(this.count);
  }
  
}

const stack = new Stack();
stack.isEmpty();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.isEmpty();
stack.length();
