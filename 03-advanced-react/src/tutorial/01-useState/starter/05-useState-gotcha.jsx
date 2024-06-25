import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  /*const handleClick=()=>{
    setValue((currentState)=>{
      const newState = currentState +1; 
      return newState;
    });
  }
  */

  const handleClick = ()=>{
    // will load 5 seconds after button is pressed 
    setTimeout(()=>{
      setValue((currentState)=> { 
        return currentState + 1;
      });
    }, 3000);
  }
  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>button</button>
    </div>
  );
};

export default UseStateGotcha;
