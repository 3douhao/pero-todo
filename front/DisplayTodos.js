import React, { useEffect, useState } from 'react'

import axios from 'axios'
import UpdateTodo from './UpdateTodo'

const DisplayTodos = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todos')
      setTodos(response.data)
      console.log(todos)
    } catch (e) {
      console.error(e.message)
    }
  }
  useEffect(() => {
    getTodos()
  }, [])

  const deleteTodo = async id => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`)
      setTodos(todos.filter(todo => todo.todo_id !== id))
      // console.log(deletedTodo)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <table className='w-4/5 mx-auto my-5'>
      <thead>
        <tr className='text-xl leading-10'>
          <th className='text-center bg-green-300 border'>Todos</th>
          <th className='w-1/6 text-center bg-red-300 border'>Edit</th>
          <th className='w-1/6 text-center bg-orange-300 border'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => {
          return (
            <tr key={todo.todo_id} className='text-center leading-8'>
              <td className='border'>{todo.description}</td>
              <td className='border'>
                <UpdateTodo todo={todo} />
              </td>
              <td className='border'>
                <button
                  className='px-4 py-2 bg-red-500'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DisplayTodos
