import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Layout/>
    </div>
    </Provider>
  );
}

export default App;
