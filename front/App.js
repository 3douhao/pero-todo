import React, { useState } from 'react'

import InputTodo from './InputTodo'
import DisplayTodos from './DisplayTodos'

function App () {
  return (
    <div className='container'>
      <InputTodo />
      <DisplayTodos />
    </div>
  )
}

export default App
