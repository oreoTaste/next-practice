import { useState } from "react";
import NavBar from "../components/NavBar";

function Home() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((cur) => cur+1)
  }
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <span>{counter}</span>
      <button onClick={onClick}>+</button>
      <style jsx>{`
        span {
          color: blue;
        }
      `}</style>
    </div>
  )
}
export default Home;
