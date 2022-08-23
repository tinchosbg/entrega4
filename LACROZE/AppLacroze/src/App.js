import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route index element={<ItemListContainer Mensaje='Bienvenido a Lacroze Store' />}></Route>
          <Route path='category'>
            <Route path=':categoryId' element={<ItemListContainer />}></Route>
          </Route>
          <Route path='item'>
            <Route path=':itemId' element={<ItemDetailContainer />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;


