import React from 'react';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron.js';
import ClassDetail from '../components/ClassDetail.js';

class Class extends React.Component {
    state = {
      classInfo: {}
    };

    componentDidMount() {
      const { classInfo } = this.props.location.state;
      this.setState({classInfo: classInfo});
    }

    render() {
      const {classInfo} = this.state;
      return (
        <>
          <div className="container">
            <Header/>
            <br/>
            <ClassDetail classInfo={classInfo}/>
          </div>
          <br/>
          <Footer/>
        </>
      )

    }
}

export default Class;