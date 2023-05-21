
import './App.css';
import Home from './component/Navbar/home';
import {About} from './component/Navbar/about';
import Register from './component/Navbar/Register';
import Login from './component/Navbar/Login';
import {Routes , Route} from "react-router-dom"
import { Navbar } from './component/Navbar/Navbar';
import Videos from './component/Navbar/Videos';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/videos' element={<Videos/>}/>
     </Routes>
    </div>
  );
}

export default App;
