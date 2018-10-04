import React, { Component } from 'react';
import AppRoutes from './routes';
import './styles/index.css';

class App extends Component {
  render() {
    return (   
      <div className="h-100">
       <AppRoutes></AppRoutes>
      </div>
    );
  }
}

export default App;
