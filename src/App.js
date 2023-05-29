import './App.css';
import { store } from './App/store'
import { Provider } from 'react-redux'
import Signin from './components/SignIn/signin';

function App() {
  return (
   <div className='App'>
      <Provider store={store}>
        <Signin/>
        
      </Provider>
      </div>
    )
 
}

export default App;