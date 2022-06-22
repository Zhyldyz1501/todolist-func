import './App.css';
import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  return (
    <div className="App">
      <Input value={value} setValue={setValue} data={data} setData={setData}/>
      <TodoList data={data} setData={setData}/>
    </div>
  );
}

export default App;
