const throttle = (cb, time) => {
  // Checking the arguments passed to the function
if (time === undefined) throw new TypeError("time is undefined");
if (time < 0) throw new RangeError("time cannot be negative");
if (typeof cb !== "function") throw new TypeError("callBack is not a function");

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
