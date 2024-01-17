"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {Title, Desc }])
    setTitle("")
    setDesc("")
  }

  let renderTask = <h2>No task Assigned</h2>
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) =>{
      return(
        <li key={i} className='flex items-center justify-center mb-5'>
        <div className='items-center justify-between mb-4 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.Title}</h5>
          <p className='text-lg font-medium'>{t.Desc}</p>
        </div>
        <button 
        onClick={()=>{
            deleteHandler(i)
          }
        }
        className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
      )    
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>To Do List</h1>      
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-950 border-2 rounded-md m-5 px-4 py-4' placeholder='Enter Title here' 
        value={Title}        
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <input type='text' className='text-xl border-zinc-950 border-2 rounded-md m-5 px-4 py-4' placeholder='Enter Description here' 
        value={Desc}        
        onChange={(e)=>{
          setDesc(e.target.value)
        }} />
        <button className='text-white rounded-md bg-black h-10 w-30 px-4 py-2 m-5'>Add task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-300'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page