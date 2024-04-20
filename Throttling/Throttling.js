const throttle = (cb, time) => {
  // Checking the arguments passed to the function
if (time === undefined) throw new Error("Please provide a valid time value.");
if (time < 0)
  throw new Error("Time cannot be negative. Please enter a positive value.");
if (typeof cb !== "function")
  throw new Error(
    "The callback parameter should be a function. Make sure you pass a valid callback function."
  );

  // Initializing the variables
  let last = 0;
  return (...args) => {
    let now = Date.now();
    /**
    Checking if the time has passed and if it is passed then calling
    the callBack function and reseting the time
     **/
    if (now - last >= time) {
      cb(...args);
      last = now;
    }
  };
};

module.exports = throttle;
