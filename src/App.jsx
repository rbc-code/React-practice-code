import { useState } from "react";
const App=()=>{
  const [city, setCity] =useState("Bhopal");
  const mayval=()=>{
    setCity("Indore")
  }
  const [color, setColor]=useState("red");
  const [cnt, setCnt]=useState(0);
  const myInc=()=>{
    setCnt(cnt+1)
  }
  const myDec=()=>{
    if (cnt<=0)
    {
      alert("You can not Decreement less than zero!!")
    }
    else{
       setCnt(cnt-1)
    }
  }

  return(
    <>
    <h1>Welcome To : {city}</h1>
    <button onClick={mayval}>Click here</button>
    <br />
    <hr />
    <h1 style={{color:color}}>My fab color : {color}</h1>
    <button onClick={()=>{setColor("yellow")}}>Yellow</button>
    <button onClick={()=>{setColor("green")}}>Green</button>
    <button onClick={()=>{setColor("orange")}}>Orange</button>
    <button onClick={()=>{setColor("black")}}>Black</button>
    <button onClick={()=>{setColor("blue")}}>Blue</button>
    <br /><hr />
    <center>
      <h1>My Counter : {cnt}</h1>
      <button onClick={myInc}>Increment</button>
      <button onClick={myDec}>Decrement</button>
      <button onClick={()=>setCnt(0)}>Reseat</button>
    </center>
    </>
  )
}
export default App;