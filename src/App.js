import React, { useState } from 'react'

export default function App() {
const [state, setstate] = useState('React')
const [Reactstate, setReactstate] = useState('Developer')



  return (
    <div>
      <h1>App {state}, {Reactstate}</h1>
      
    </div>
  )
}