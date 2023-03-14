import React, { useState, useEffect } from "react";
import useList from "../../hooks/useList";

const TaskList = () => {
  const tasks = useList();
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(tasks.value);

  useEffect(() => {
    setTaskList(tasks.sortValues);
  }, [tasks, tasks.sortValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(task);
    setTask("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSort = () => {
    tasks.sortList();
  };

  return (
    <div className="container m-5 p-2 text-center bg-light rounded shadow-sm d-flex flex-column align-items-center justify-content-center w-100">
      <h3 className="text-secondary fw-bold">Task List</h3>
      <form
        onSubmit={handleSubmit}
        className="form p-2 bg-ligh shadow-md rounded d-flex flex-column align-items-center justify-content-center gap-3"
      >
        <input
          value={task}
          type="text"
          placeholder="Write new task"
          onChange={handleChange}
          className="form-control form-control-lg rounded text-center fw-bold"
        />
        <button type="submit" className="btn btn-success btn-lg w-100">
          NEW TASK
        </button>
      </form>
      {!tasks.isEmpty() ? (
        <div className="card shadow-md rounded w-50">
          <div className="card-body d-flex flex-column align-items-start justify-content-center">
            {taskList.map((task, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onClick={() => tasks.remove(index)}
                  className="form-check-input"
                />{" "}
                {task}
              </li>
            ))}
          </div>
          <div className="card-footer d-flex align-items-center justify-content-around">
            <button className="btn btn-primary btn-lg" onClick={handleSort}>
              SORT
            </button>
            <button
              className="btn btn-warning btn-lg"
              onClick={tasks.reverseList}
            >
              REVERSE
            </button>
            <button className="btn btn-danger btn-lg" onClick={tasks.clearList}>
              DELETE
            </button>
          </div>
        </div>
      ) : (
        <p className="text-warning fw-bold">The list is empty</p>
      )}
    </div>
  );
};

export default TaskList;
