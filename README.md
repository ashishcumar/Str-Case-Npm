# debounce-throttling

## Description
debounce-throttling is a lightweight npm package designed to simplify and enhance event handling in JavaScript applications. With this package, developers can effortlessly implement debouncing and throttling functionalities to optimize performance and improve user experience.

Event handling in JavaScript often requires careful management to balance responsiveness with efficiency. Debouncing and throttling are two techniques commonly used to achieve this balance.

```bash
npm install debounce-throttling
```

### Debouncing
Debouncing is a technique used to ensure that a function is not called repeatedly within a short period of time. It's particularly useful for scenarios where you want to wait for a pause in user input before taking action, such as autocomplete suggestions or search input.

### Throttling
Throttling is a technique used to limit the rate at which a function can be called. It ensures that a function is called at a controlled frequency, regardless of how many times the event that triggers it occurs. Throttling is often used for tasks like handling scroll events or resizing windows.

## Features
- **Debouncing:** Prevents excessive function calls by waiting for a pause in user input.
- **Throttling:** Limits the rate of function calls to a specified frequency.
- **Efficiency:** Optimizes performance and improves responsiveness in JavaScript applications.
- **Simplicity:** Easy-to-use API for integrating debounce and throttle functionalities into your projects.

## How to Use
1. Install the package via npm: npm install debounce-throttling
2. Import the module into your JavaScript file:
```javascript
// For Vanila Js and Node Js
const { debounce, throttle } = require('debounce-throttle');

// For React And Other Frameworks 
import {debounce,throttle} from "debounce-throttle"

// Code Snippets
const debouncedFunction = debounce(yourFunction, durationToDebounce);
const throttledFunction = throttle(yourFunction, durationToThrottle);
```

## Use Cases
- **Debouncing:**
  - User input fields: Improve performance when filtering or searching through large datasets by debouncing input events.
  - Autocomplete functionality: Wait for a pause in typing before fetching autocomplete suggestions, enhancing user experience.
  - Form validation: Prevent frequent validation checks during user input by debouncing input events.
  
- **Throttling:**
  - Scrolling events: Control the rate of execution for actions triggered by scrolling, such as lazy loading content or updating UI elements.
  - Window resizing: Avoid excessive recalculations of layout or styles by throttling window resize events, ensuring smoother user experience.
  - Mousemove events: Limit the frequency of actions triggered by mouse movement, such as updating tooltip positions or animating UI elements, for better performance.




