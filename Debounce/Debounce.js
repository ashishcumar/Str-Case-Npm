const debounce = (cb, time) => {

  // Checking the arguments passed to the function
  if (time === undefined) return throwError("time is undefined");
  if (time < 0) return throwError("time cannot be negative");
  if (typeof cb !== "function") return throwError("callBack is not a function");

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
