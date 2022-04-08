import React, { useState } from "react";

//ref: https://www.freecodecamp.org/news/javascript-debounce-example/
const ButtonDebounce = () => {
  let [count, setCount] = useState(0);
  //We schedule the timer destruction for 300 ms.
  //Every subsequent button click within that timeframe will already have the timer defined
  //and will only push the destruction 300 ms to the future.
  function debounce_leading(func, timeout = 300) {
    //dec time
    let timer;
    return (...args) => {
      if (!timer) {
        func.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    };
  }

  function saveInput(args) {
    console.log("Saving data");
    setCount(++count);
  }

  const processChanges = debounce_leading(() => saveInput());

  return (
    <div
      style={{ display: "block", justifyContent: "center", padding: "24px" }}
    >
      <h1>Clicked counter {count} times</h1>
      <button onClick={() => processChanges()}>Click me</button>
    </div>
  );
};

export default ButtonDebounce;

/**
 * function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(){
  console.log('Saving data');
}
const processChange = debounce(() => saveInput());
 */
