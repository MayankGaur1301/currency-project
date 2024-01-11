import { useState } from "react";

function UseStateHook({myObj, profession="Reactjs"}) {
  console.log(myObj)
  console.log(profession)
  const [counter, setCounter] = useState(15);

  const incrementValue = () => {
    if (counter < 20) {
      return setCounter(counter + 1);
    } else {
      window.alert("20 is the limit");
    }
  };

  const decrementValue = () => {
    if (counter > 0) { 
      return setCounter(counter - 1);
    } else {
      window.alert("you can't go below 0");
    }
  };
  return (
    <div>
      <p>{profession} Developer : {myObj.name}</p>
      <p>counter value: {counter}</p>
      <button onClick={incrementValue}>Increment</button> <br />
      <button onClick={decrementValue}>Decrement</button>
    </div>
  );
}

export default UseStateHook;
