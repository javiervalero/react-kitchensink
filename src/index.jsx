import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';
// import TodoList from './features/todoList';
import '../node_modules/modern-normalize/modern-normalize.css';

// const divStyle = color => css`
//   color: ${color};
// `;

const App = ({ color }) => {
  const Div = styled.div({ color });

  return (
    <React.Fragment>
      <Div>Hello React,Webpack 4 & Babel 7!</Div>
      {/* <TodoList /> */}
    </React.Fragment>
  );
};

App.propTypes = {
  color: PropTypes.string.isRequired,
};

ReactDOM.render(
  <App color="red" />,
  document.querySelector('#root'),
);
