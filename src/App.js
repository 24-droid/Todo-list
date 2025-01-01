
import './App.css';
import MyTodos from './components/MyTodos';
import TodoForm from './components/TodoForm';
function App() {
  return (
    <div className="App">
      <h1>React Todo Application</h1>
      <TodoForm />
      <MyTodos />
    </div>
  );
}

export default App;
