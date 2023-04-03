import React, { useState } from 'react'
import { deposit, withdraw, depositByValue } from './feauture/counter/counterSlice';

import { useSelector, useDispatch } from 'react-redux'

function App() {

  const [input, setInput] = useState('')
  const count = useSelector((state) => state.counter.value )
  const dispatch = useDispatch()


  return (
    <div
    className='bg-zinc-900 text-zinc-100 flex justify-center
    item-center flex-col min-h-screen gap-6'
    >
    <div className='space-x-3'>

      <input type="number" 
      className="bg-gray-800 rounded border" 
      placeholder='Enter the number'
      value={input}
      onChange={(e) => setInput(e.target.value)} 
      />
    <button 
    onClick={() => dispatch(depositByValue(+input))}
    className='text-white bg-indigo-500 border-0 py-2 px-6
    focus:outline-none hover:bg-indigo-600 rounded text-lg'
    >
    Deposit By Value
        </button> 
    </div>
    <div className='space-x-6'>
     <button 
     onClick={() => dispatch(deposit())}
     className='text-white bg-indigo-500 border-0 py-2 px-6'>
      Deposit
     </button>
    </div>
     <span>{count}</span>  
     <button 
     onClick={() => dispatch(withdraw())}
     className='text-white bg-indigo-500 border-0 py-2 px-6'>
      Withdraw
     </button>
    </div>
  );
}

export default App;
