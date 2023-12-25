class Observer {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class ConcreteObserver {
  update(data) {
    console.log(`Received update: ${data}`);
  }
}

// Example usage
const subject = new Observer();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Some data has changed.");
// Output: Received update: Some data has changed. (for each observer)
