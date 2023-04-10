import React from 'react';
import axios from 'axios';

class GetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    }

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.log(error);
        });

    }
    render() {
        return (
          <div>
            <h2>Recent Posts</h2>
            <ul>
              {this.state.data.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        );
      }
}

export default GetComponent