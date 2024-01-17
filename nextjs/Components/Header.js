import React from 'react'

const Header = (props) => {
  return (
    <div className='h-15 p-5 bg-blue-500 flex item-cebter justify-between'>
        <h1>Old RCB</h1>
        <div className='flex gap-5'>
            <h4>Anything</h4>
            <h4>{props.user}</h4>
            <h4>Anything</h4>
            <h4>{props.edit}</h4>
        </div>
    </div>
  )
}

export default Header
