import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    hobby:'reading'
  })

  const displayPerson = () =>{
    setPerson({name:'john', age:28, hobby:'screaming'});
    //to overwrite just one 
    // setPerson ({...person,name:'susan'}); 
  }
  return (
    <div>
      <h2>useState object example</h2>
         <h4>{person.name}</h4>
            <h4>{person.age}</h4>
            <h4>Hobby:{person.hobby}</h4>
            <h1></h1>
      <button className="btn" onClick={displayPerson}> SHOW</button>
    </div>
  );
};

export default UseStateObject;
