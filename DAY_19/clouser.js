// clouser :
// A closure is created when a function remembers and can access variables from its outer scope even after the outer function has finished executing.

function outer() {
    let cnt = 0;
    function inner() {
        console.log(cnt);
        cnt++;
    }
    return inner;
}
let count = outer();
count();
count();
count();
count();
count();

// ********** Why Closures are Used
// Data hiding / private variables
// Function factories
// Callbacks
// Event handlers
// Debouncing
// Throttling
// React Hooks
