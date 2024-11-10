import React from 'react';
import './App.css';
import ExpiredTask from './components/ExpiredTask';
import SearchFilter from './components/SearchFilter';
import TaskListTodo from './components/TaskListTodo';
import TaskOnProgress from './components/TaskOnProgress';
import TaskDone from './components/TaskDone';

const App = () => {
  return (
    <div className="app-container">
      <SearchFilter />
      <div className="main-content">
        <ExpiredTask/>
        <div className="box"><TaskListTodo/></div>
        <div className="box"><TaskOnProgress/></div>
        <div className="box"><TaskDone/></div>
      </div>
    </div>
  );
};

export default App;
