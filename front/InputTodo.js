import React, { useState } from 'react'
import axios from 'axios'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const handleInput = e => {
    setDescription(e.target.value)
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      // const body = { description }
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8000/todos',
        data: { description }
      })
      window.location = '/'
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <div>
      <div className='container'>
        <p className='my-5 text-4xl text-center text-blue-600'>My todos</p>
        <form onSubmit={handleSubmit} className='flex justify-center'>
          <input
            type='text'
            onChange={handleInput}
            value={description}
            className='w-9/12 h-16 px-6 mx-2 bg-purple-300'
          />
          <button type='submit' className='w-16 h-16 bg-green-400'>
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default InputTodo
