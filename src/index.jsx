import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './features/todoList';

const App = () => (
  <React.Fragment>
    <div>Hello React,Webpack 4 & Babel 7!</div>
    {/* <TodoList /> */}
  </React.Fragment>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
