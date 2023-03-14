import "./App.css";
import Counter from "./components/counter/Counter";
import TaskList from "./components/list/TaskList";

function App() {
  return (
    <div className="container container-lg d-flex flex-column align-items-center justify-content-center mt-3 p-2 rounded shadow">
      <h1 className="bg-light rounded shadow p-2 text-secondary fw-bold">Open Bootcamp:<span style={{"color": "lightblue"}}> React JS.</span></h1>
      <h2 className="bg-light rounded shadow p-2 text-secondary fw-bold">Hooks Personalizados</h2>
      <TaskList />
      <Counter />
    </div>
  );
}

export default App;
