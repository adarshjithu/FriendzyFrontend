import React from 'react'
import './Main.css'
import StatusBar from '../StatusBar/StatusBar'
import Thoughts from '../Thoughts/Thoughts'
function Main() {
  return (
    <div className='main' style={{overflow:'scroll',scrollbarWidth:"none"}}>
       <StatusBar/>
       <Thoughts/>
       
    </div>
  )
}

export default Main
