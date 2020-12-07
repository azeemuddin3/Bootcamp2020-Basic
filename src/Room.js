import React , {useState} from 'react'

function Room () {
    let [ isLit , setLit] =useState(true)
    let [ age ,setage] = useState(12)
function Takeaction () {
setLit(!isLit)
}

function Age(){
    setage(++age)
    
}


    return (
        <div>
            Room in now { isLit ? 'Lite' : 'Dark'}
            <br>
            </br>
   
            <button onClick = {Takeaction}>  Toggle</button>
            
            <p> The age is incrasing by following number {age} </p>
            <button onClick ={Age}> Age increment</button>
        </div>
    )
}

export default Room