
import './App.css';

import Searchbar from './component/Searchbar';
import { useState } from 'react';

function App() {
  const [state, setState] = useState([])
  return (
    <div className="App">
    <div className='suggestion'>
   <Searchbar searchedResult = {setState}/>
   <div>{state.map((el,ind)=>{
    return(<>
    <div key={el.state_id}>{el.state_name}</div>
    </>)
   })}</div>
  
   </div>
    </div>
  );
}

export default App;
