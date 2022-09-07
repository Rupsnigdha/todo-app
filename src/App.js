import "./App.css";
import TodoList from "./components/todoList";
// import { signInWithGoogle } from "./firebase";

function App() {
  return (
    <div className="todo-app">
      {/* <button onClick={signInWithGoogle}> Sign In With Google</button>
      <h2>Signed in as {localStorage.getItem("name")}</h2> */}
      <TodoList />
    </div>
  );
}

export default App;
