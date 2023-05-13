import './App.css';
import { useState } from 'react';
import { ToDoList } from './molecule/list';
import { InputContainer } from './atom/Input';

function App() {
  const [listEle, setListEle] = useState([]);

  const addElement = (inputText) => {
    if (inputText !== "") {
      setListEle([...listEle, inputText]);
    }
  };

  const deleteEle = (index) => {
    const updatedList = listEle.filter((_, i) => i !== index);
    setListEle(updatedList);
  };

  const deleteList = () => {
    setListEle([]);
  };

  return (
    <div className="App">
      <div className='material'>
        <InputContainer addElement={addElement} deleteList={deleteList} />
        <h1>My ToDoList</h1>
        <br />
        {listEle.map((el, i) => {
          return <ToDoList el={el} key={i} deleteEle={() => deleteEle(i)} />;
        })}
      </div>
    </div>
  );
}

export default App;
