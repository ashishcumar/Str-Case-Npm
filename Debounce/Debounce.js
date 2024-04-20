const debounce = (cb, time) => {
  // Checking the arguments passed to the functionif (time === undefined)  throw new TypeError("time is undefined");
  if (time < 0) throw new RangeError("time cannot be negative");
  if (typeof cb !== "function")
    throw new TypeError("callBack is not a function");

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
