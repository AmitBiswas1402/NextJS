"use client"

import axios from 'axios'
import React, {useEffect, useState} from 'react'

const page = ({params}) => {
    const { id } = params
    const [users, setusers] = useState([])
    const getUser = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setusers(data)
    }
    useEffect(() => {
        getUser()
    }, [])
  return (
    <>
    {JSON.stringify(users)}
    </>
  )
}

export default page
