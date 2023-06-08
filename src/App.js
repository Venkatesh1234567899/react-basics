import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Header name = {'React'}
      age = {42}
      ceoBoolean = {false}
      array = {[1,2,3,4]}
      />
      <Footer/>
    </div>
  )
}