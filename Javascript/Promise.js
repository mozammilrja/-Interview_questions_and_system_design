// Promise
const customPromise = new Promise((resolve, reject) => {
  // Resolve or reject based on some condition
  const condition = true;
  condition ? resolve("Success!") : reject("Error!");
});

// Promise.all
const promise1 = Promise.resolve("Promise 1");
const promise2 = Promise.resolve("Promise 2");

const allPromises = Promise.all([promise1, promise2]);

// Promise.any (may not be supported in all environments)
const anyPromises = Promise.any([promise1, promise2]);
