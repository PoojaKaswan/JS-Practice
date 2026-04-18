// Immediately Invoked Function Expressions (IIFE): IIFE is used to prevent global scope pollution by creating its own isolated scope, while also allowing the function to execute immediately when the file loads.

(function chai(){
    // named IIFE: chai
    console.log(`DB CONNECTED`);
})();

/*
The two key parts:

1. (function() { ... }) — the function definition wrapped in parentheses
2. () — the invocation/execution call right after
*/

// IIFE with Arrow Functions:

( () => {
    //unnamed IIFE
    console.log(`DB CONNECTED`);
})(); //; is important for more than 1 iife to execute

( (name) => {
    //Parameter IIFE
    console.log(`DB CONNECTED, ${name}`);
})("Pooja");