import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Home from './Home'
import { stores } from './store'
import './styles.scss'

function App() {
  return (
    <Provider store={stores}>
      <Home></Home>
    </Provider>
  );
}

export default App;
