import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import GotoSignUp from './components/GotoSignup/GotoSignup';
import SignUpPage from './components/Register/SignUpPage';
import SignInPage from './components/SignIn/signin';
import { store } from './components/Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/enter-page' element={<GotoSignUp />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;