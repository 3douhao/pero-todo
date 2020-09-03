import React, { useState } from 'react'

import axios from 'axios'

const UpdateTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)

  const handleClick = async e => {
    e.preventDefault()
    try {
      const body = { description }
      await axios(`http://localhost:8000/todos/${todo.todo_id}`, {
        method: 'put',
        data: body
      })
      window.location = '/'
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <React.Fragment>
      <button
        type='button'
        className='btn btn-warning'
        data-toggle='modal'
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className='modal'
        id={`id${todo.todo_id}`}
        onClick={e => setDescription(todo.description)}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Edit your todo here</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={e => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              <input
                type='text'
                placeholder='edit todo here'
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-dismiss='modal'
                onClick={handleClick}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
                onClick={e => setDescription(todo.description)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default UpdateTodo
