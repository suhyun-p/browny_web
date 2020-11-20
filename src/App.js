import React from 'react';import { HashRouter, Route } from 'react-router-dom'
import Home from './routes/Home';
import Class from './routes/Class'

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Class" exact={true} component={Class}/>
    </HashRouter>
  )
}

export default App;
