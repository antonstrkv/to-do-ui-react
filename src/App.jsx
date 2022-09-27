import React, { useState } from 'react';

import { CreateForm} from './Forms';
import { CreateText } from './Header';
import { ListOfTasks } from './ListOfTasks';

function App() {
  const [todos, setTodos] = useState([
    { task: 'Задача 1', statusToDo: true, priority: 'High' },
    { task: 'Задача 2', statusToDo: false, priority: 'High' },
    { task: 'Задача 3', statusToDo: false, priority: 'High' },
    { task: 'Задача 4', statusToDo: true, priority: 'Low' },
    { task: 'Задача 5', statusToDo: false, priority: 'Low' }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  const completeTodo = (item) => {
    let newTodos = [...todos];
    newTodos[newTodos.indexOf(item, 0)].statusToDo = !newTodos[newTodos.indexOf(item, 0)].statusToDo;
    setTodos(newTodos);
  };

  const removeTodo = item => {
    const newTodos = [...todos];
    newTodos.splice(todos.indexOf(item, 0), 1);
    setTodos(newTodos);
  };


  return (
    <div>
      <div className="high__inner" id="high__content">
        <CreateText className="text__hight" text="HIGH" />
        <CreateForm classNameForm="form__high" idNameInput="form__high"
          classNameInput="input__place-high" classNameButton="add__btn" addTodo={addTodo} PRIORITY="High" />
        <ListOfTasks PRIORITY='High' list={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>

      <div className="low__inner" id="low__content">
        <CreateText className="text__low" text="LOW" />
        <CreateForm classNameForm="form__low" idNameInput="form__low"
          classNameInput="input__place-low" classNameButton="add__btn" addTodo={addTodo} PRIORITY="Low" />
        <ListOfTasks PRIORITY='Low' list={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App;
