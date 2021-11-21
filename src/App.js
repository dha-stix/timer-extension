import './App.css';
import React, {useState, useEffect, useRef} from "react"

function App() {
  const [timer, setTimer] = useState(60)
  const countRef = useRef(null)

  const handleTimer = () => {
      countRef.current = setInterval(()=> {
          setTimer( intial => intial - 1)
      }, 1000)        
    }

  useEffect(()=> {
    function stopTimer() {
      if(timer === 0) {
        clearInterval(countRef.current)
        setTimer(0)
      } 
    }
    stopTimer()
  }, [timer])
  return (
    <div className="app">
      <nav>
        <p>Swiggy pH</p>
      </nav>
      
      <main>
          <p>Here is Swiggy timer</p>
          <p>You have {"  "}<span className="timer"> {timer} {" "} </span> seconds left</p>
          <button onClick={handleTimer}>{timer ===0 ? "COMPLETED" : "COUNTDOWN"}</button>
          {timer === 0 &&  <h3> Time Up!</h3>} 
      </main>
    </div>
  );
}

export default App;
