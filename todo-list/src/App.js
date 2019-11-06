import React, {useReducer} from 'react';
import {todoReducer, initState, ADD_ITEM, TOGGLE_COMPLETED, CLEAR_TODO} from './reducers/todoReducer';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] =useReducer(todoReducer, initState);

  const addItem = item => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
  };

  const clearItems = () => {
    dispatch({
      type: CLEAR_TODO
    });
  };

  const toggleItem = id => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: id
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addItem={addItem}
                clearItems={clearItems}
                />
      <TodoList todoItems={state.todoItems}
                toggleItem={toggleItem} />
    </div>
  );
}

export default App;
