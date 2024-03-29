import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components.js/Navbar';
import { Context } from './theme-context';

function App() {
  return (
    <div className='App'>
      <Context>
        <BrowserRouter>
          {/*Navbar*/}
          <Navbar />
          {/*Routes*/}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
