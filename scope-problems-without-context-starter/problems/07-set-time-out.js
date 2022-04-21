/***********************************************************************
Write a function named `funcTimer(time, func)`

that will allow you to hand in a function and a number representing milliseconds.

The `funcTimer` should use the global.setTimeout function to invoke the passed in function in `time` amount of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:


***********************************************************************/
// WITH CB FUNCTION

    // function funcTimer(time, func) { // time = time, func = callback function

    //   setTimeout (func, time) // passes our callback function after the time
    // }

    // funcTimer(5000, func); // in 5 seconds prints: "Party time!"




// WITHOUT CB FUNCTION, JUST PASSING IN THE CODE FROM FUNC

    function funcTimer(time) { // time = time, func = callback function

      setTimeout (function() {
        console.log("Party time!")
      }, time) // passes our callback function after the time
    }

    funcTimer(5000); // in 5 seconds prints: "Party time!"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
