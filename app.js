console.log('app');

// Java script is a synchronous programming language but because of callback functions we can make it work like asynchronous programming language.
// Synchronous mean that, on at atime one line of code is being executed at time in order the code appears. In js one thing is happening at a time.

// Promises
const myPromise = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(console.log("Promise resolved"))
    // reject(console.log('Promise rejected'));
  }, 2000)
});

// A promise has 3 states
// 1- Pending => This is the initial state or state during execution of promise.
// 2- Fulfilled => Promise was successful
// 3- Rejected => Promise failed

const chainPromise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 3000);
}).then(function(result){
  console.log(result);
  return result * 3;
}).then(function (result) {
  console.log(result);
  return result * 4;
}).then(function(result){
  console.log(result);
  return result * 6;
}).then(function(result){
  console.log(result);
})
console.log(chainPromise);


// Async functions enable us to write promise based code as if it were synchronous,
// but without blocking the execution thread. 

async function firstAsync() {
  return 27;
}

console.log(firstAsync().then(console.log('result')))

// The await operator is used to wait for promise. It can be used inside an Async block only. The keyword await makes java script
// Wait until the promise returns a result.

async function secondAsync() {
  let promise = new Promise((res, rej) => {
      setTimeout(() => res("Now it's done!"), 1000)
  });

  // wait until the promise returns us a value
  let result = await promise; 

  // "Now it's done!"
  return result;
  }
  // Now it is done
  (async () => {
    console.log(await secondAsync())
 })()

