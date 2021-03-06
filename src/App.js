import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';

// template + logic
// JSX
//babel

const App = () => { //class

  //state
  let [name, setName] = useState('Eric'); //[a1, b1, c1....]
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan IT Channel', type: 'eric' },
    { id: 'todo2', title: 'Doing homework', type: 'eric' },
    { id: 'todo3', title: 'Playing game', type: 'hoidanit' },
    { id: 'todo4', title: 'Reading books', type: 'hoidanit' }
  ]);

  //didmount
  useEffect(() => {
    console.log('run use effect')
  }, [address]);

  useEffect(() => {
    console.log('run use effect todos')
  }, [todos]);


  const handleEventClick = (event) => {
    if (!address) {
      alert('emtpy input')
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = {
      id: Math.floor((Math.random() * 100000) + 1),
      title: address,
      type: 'eric'
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    alert('times up')
  }
  //re-render
  //for for-each => map
  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown onTimesup={onTimesup} />
        <span>---------------------</span>
        <NewCountDown onTimesup={onTimesup} />


        <h1>Hello world with React and {name}!</h1>
        <Covid />
        {/* <Todo
          todos={todos}
          title={'All todos'}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'eric')}
          title={`Eric's todos`}
          deleteDataTodo={deleteDataTodo}
        />
        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
