import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a Santo Vicio GrowShop'}/>
        <ItemCount initial={1} stock={19} onAdd={(quantity)=> console.log('Cantidad agregada',quantity)}></ItemCount>
        </div>
  )
}

export default App
