import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido al Book E.commerce"}/>
    </div>
  )
}

export default App