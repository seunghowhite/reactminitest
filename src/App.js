import React, { useState } from 'react'
import "./App.css"

function App() {

  const [toDo, setToDo] = useState([
    { id: 1, title: 'react를 배워봅시다.' }
  ])

  console.log(toDo)
  const [toDoTitle, setToDoTitle] = useState('')

  const titleHander = (evnet) => { setToDoTitle(evnet.target.value) }

  const addToDO = (event) => {
    event.preventDefault();
    const newtodolist = {
      id: toDo.length + 1,
      title: toDoTitle,
    }

    setToDo([...toDo, newtodolist])
    setToDoTitle('')
  }
  return (
    <div>
      <div className='write'>
        <form onSubmit={addToDO} >
          <input value={toDoTitle} onChange={titleHander} required />
          <button type='submit' >추가하기</button>
          <h1>Todo List</h1>
        </form>
      </div>
      <div className='show'>
        {toDo.map((list) => {
          return (
            <div className='todo'>{list.title}</div>
          )
        })}
      </div>

    </div >
  )
}

export default App