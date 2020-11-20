import React from 'react';

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
        <span>{classInfo.title}</span>
      )

    }
}

export default Class;