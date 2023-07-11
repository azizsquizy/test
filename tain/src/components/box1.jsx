import React, { useContext } from 'react'
import Box2 from './box2'
import { textContext } from '../App'
const Box1 = () => {
    const context = useContext(textContext)

  return (
    <div className='container1'>
        <h1>this is a test for {context}</h1>
    </div>
  )
}

export default Box1