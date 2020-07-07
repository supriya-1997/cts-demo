import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
       
        <div>
           Count:{count} 
          <button onClick={()=>setCount(prevCount=>prevCount+1) }>IncrementCount </button>
          <button onClick={()=>setCount(prevCount=>prevCount-1) }>DecrementCount </button>
          <button onClick={incrementFive}>IncrementFive</button>
        </div>
        
    )
}

export default HookCounter
