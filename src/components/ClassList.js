import React from 'react';
import Album from './Album.js';

class ClassList extends React.Component {
    state = {
      isLoading: false,
      classList: []
    };

    componentDidMount() {
      const classList = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9
        },
        {
          id: 10
        },
        {
          id: 11
        },
        {
          id: 12
        }
      ]
      this.setState({isLoading: true, classList});
    };

    render() {
        const { isLoading, classList } = this.state;

        return (
            <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                {!isLoading ? "Loading... " : classList.map((class_) => {
                  return (<Album key={class_.id}/>)
                })}
              </div>
            </div>
          </div>
        )
    };
}

export default ClassList;