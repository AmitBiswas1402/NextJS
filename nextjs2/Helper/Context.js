"use client"
import React, { children, createContext } from 'react'
export const MyContext = createContext()

const Context = () => {
  const username = "amit biswas"
  return (
    <div>
      <MyContext.Provider value={username}>
        {children}
      </MyContext.Provider>      
    </div>
  )
}

export default Context
