export const throttle = (
  cb: Function,
  time: number
): ((...args: any[]) => void) => {
  // Checking the arguments passed to the function
  if (time === undefined) throw new TypeError("time is undefined");
  if (time < 0) throw new RangeError("time cannot be negative");
  if (typeof cb !== "function")
    throw new TypeError("callBack is not a function");

  // Initializing the variables
  let last = 0;
  return (...args: any[]): void => {
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

export const debounce = (cb: Function, time: number) => {
  // Checking the arguments passed to the functionif (time === undefined)  throw new TypeError("time is undefined");
  if (time === undefined) throw new TypeError("time is undefined");
  if (time < 0) throw new RangeError("time cannot be negative");
  if (typeof cb !== "function")
    throw new TypeError("callBack is not a function");

  // Initializing the variables
  let timer: NodeJS.Timeout | null;
  return (...args: any[]) => {
    // Clearing the timer if it is already set
    if (timer) clearTimeout(timer);

    // Setting the timer
    timer = setTimeout(() => {
      cb(...args);
    }, time);
  };
};
