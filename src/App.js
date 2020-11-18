import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ClassList from './components/ClassList.js';
import Jumbotron from './components/Jumbotron.js';

class App extends React.Component {
  render() {
    return  (
      <div className="App">
        <Header/>

        <main role="main">
          <Jumbotron />
          <ClassList />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App;
