import './App.css';

import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>

      <ul>
        <TodoItem task='Köp kaffe' done={ false } />
        <TodoItem task='Köp kaka' done={ true } />
        <TodoItem task='Brygg kaffe' done={ false } />
        <TodoItem task='Drick kaffe' done={ false } />
      </ul>
    </div>
  );
}

export default App;
