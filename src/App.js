import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import LoginAdmin from './pages/LoginAdmin';
import Products from './pages/Product';
import Contact from './pages/Contact';
import BLog from './pages/BLog';
import Admin from './pages/Admin';

function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Tentang Kami' element={<About/>}/>
        <Route path='/produk' element={<Products/>}/>
        <Route path='/kontak' element={<Contact/>}/>
        <Route path='/blog' element={<BLog/>}/>
        <Route path='/login' element={<LoginAdmin/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
