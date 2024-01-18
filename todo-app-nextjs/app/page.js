"use client";
import React, { useState } from 'react';

const Page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Editing an existing task
      const updatedTasks = [...mainTask];
      updatedTasks[editIndex] = { Title, Desc };
      setMainTask(updatedTasks);
      setEditIndex(null);
    } else {
      // Adding a new task
      setMainTask([...mainTask, { Title, Desc }]);
    }

    setTitle("");
    setDesc("");
  }

  const editHandler = (i) => {
    setEditIndex(i);
    setTitle(mainTask[i].Title);
    setDesc(mainTask[i].Desc);
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  }

  let renderTask = <h2 className="text-gray-500">No tasks assigned</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className='flex items-center justify-center mb-5 animate__animated animate__fadeIn'>
        <div className='w-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-md p-6 shadow-lg'>
          <h5 className='text-3xl font-bold mb-4 text-white'>{t.Title}</h5>
          <p className='text-lg text-gray-800'>{t.Desc}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => editHandler(i)}
              className='bg-indigo-500 text-white px-4 py-2 rounded-md font-bold mr-2 hover:bg-indigo-600'
            >
              Edit
            </button>
            <button
              onClick={() => deleteHandler(i)}
              className='bg-rose-500 text-white px-4 py-2 rounded-md font-bold hover:bg-rose-600'
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    ));
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <h1 className='bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white p-5 text-5xl font-bold text-center shadow-md'>Task Manager</h1>
      <form onSubmit={submitHandler} className="mt-8 max-w-3xl mx-auto">
        <input
          type='text'
          className='text-3xl border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:border-blue-500'
          placeholder='Enter Title here'
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='text-xl border border-gray-300 rounded-md p-4 mt-4 w-full focus:outline-none focus:border-blue-500'
          placeholder='Enter Description here'
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='text-white rounded-md bg-fuchsia-600 h-12 w-36 mt-4 hover:bg-fuchsia-700'>
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </form>
      <hr className="mt-8" />
      <div className='p-8'>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default Page;
