import store from './redux/store';
import { Provider } from "react-redux"
import './App.css';
import Movie from './redux/Movie';
import Navbar from './UI/Navbar';
import Faviorites from './UI/Faviorites';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store} className="provider">
      <BrowserRouter>
        <div className="App" >
        
          <Navbar />
          <div className='hii'>
          <Routes>
            <Route path='/' element={<Movie/>} />
            <Route path="/Faviorites" element={<Faviorites/>} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
