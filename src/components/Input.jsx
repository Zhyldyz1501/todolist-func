import React from 'react'

function Input({ value, setValue, data, setData}) {
    
    const handleChange = (event) => {
        setValue(event.target.value)
        console.log(value, 'val')
    }

    const addData = (event) => {
        event.preventDefault();
        setData([
            ...data, // spread operator
            {text: value, completed: false, id:Math.random()*1000}
        ])
        console.log(data, 'click')
        setValue('')
    }

  return (
      <div>
          {/* controlled Input */}
      <input value={value} type="text" onChange={handleChange} /> 
      <select >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
          <button type='submit' onClick={addData}>
            Add todo
          </button>

    </div>
  )
}

export default Input