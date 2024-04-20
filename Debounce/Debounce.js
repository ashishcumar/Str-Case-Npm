const debounce = (cb, time) => {

  // Checking the arguments passed to the function
if (time === undefined) throw new Error("Please provide a valid time value.");
if (time < 0)
  throw new Error("Time cannot be negative. Please enter a positive value.");
if (typeof cb !== "function")
  throw new Error(
    "The callback parameter should be a function. Make sure you pass a valid callback function."
  );


  // Initializing the variables
  let timer;
  return (...args) => {
    // Clearing the timer if it is already set
    if (timer) clearTimeout(timer);

    // Setting the timer
    timer = setTimeout(() => {
      cb(...args);
    }, time);
  };
};

module.exports = debounce;
