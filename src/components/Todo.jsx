import React from 'react'

function Todo({ todo, text, data, setData }) {
  
  const handleDelete = (event) => {
    setData(data.filter((el) => el.id !== todo.id));
    console.log(data, 'click')
  }
  const handleCompleted = (event) => {

  }

  return (
      <div>
          <li>
              {text}
          </li>
          <button onClick={handleDelete}>Delete</button>
          <button onclick={handleCompleted}>Complete</button>
    </div>
  )
}

export default Todo