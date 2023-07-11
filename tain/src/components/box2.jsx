import React, { useContext } from 'react'


const Box2 = () => {
    const context = useContext(textContext)
  return (
    <div>
            this is this the props mean to be {context}
    </div>
  )
}

export default Box2