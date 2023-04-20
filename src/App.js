import './App.css';
import { Logo } from './logo';
import { Button } from './button';
import { ReactBenefits } from './ReactBenefits';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <div className="App">
      <Logo/>
      <ReactBenefits/>
      <Button/>
    </div>
    
    </Fragment>
  );
}

export default App;
