const throttle = (cb, time) => {
  // Checking the arguments passed to the function
  if (time === undefined) return throwError("time is undefined");
  if (time < 0) return throwError("time cannot be negative");
  if (typeof cb !== "function") return throwError("callBack is not a function");

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
