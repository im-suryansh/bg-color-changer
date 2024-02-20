import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color,setcolor]=useState('orange')

  return (
    <div className="w-screen h-screen duration-200 "
    style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap gap-8 justify-center bg-white rounded-2xl px-3 py-2'>
        <button className='bg-red-500 w-20 h-20 rounded-full' onClick={()=>setcolor('red')}></button>  
        <button className='bg-black-500 w-20 h-20 rounded-full' onClick={()=>setcolor('black')}></button>  
        <button className='bg-orange-500 w-20 h-20 rounded-full' onClick={()=>setcolor('orange')}></button>  
        <button className='bg-blue-400 w-20 h-20 rounded-full' onClick={()=>setcolor('lightblue')}></button>  
        <button className='bg-yellow-400 w-20 h-20 rounded-full' onClick={()=>setcolor('yellow')}></button>  
        <button className='bg-green-500 w-20 h-20 rounded-full' onClick={()=>setcolor('lightgreen')}></button>  
      </div>
      </div>  
    </div>

  )
}

export default App
