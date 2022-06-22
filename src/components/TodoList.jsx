import React from 'react'
import Todo from './Todo'

function TodoList({data, setData}) {
  return (
      <div>
          <ul>
              {
                  data.map((todo) => {
                      return (
                          <div key={todo.id}>
                              <Todo
                                  text={todo.text}
                                  todo={todo}
                                  data={data} // props drilling
                                  setData={setData}
                              />
                          </div>
                      )
                  })
              }
          </ul>
    </div>
  )
}

export default TodoList