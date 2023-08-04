//import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import About from './components/about/about';
import Order from './components/order/order';
import Nopage from './components/nopage/nopage';


function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='*' element={<Nopage/>}/>
      </Route>
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
