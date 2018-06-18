import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <div>
        <input onChange={this.handleNameInput} />
        {this.props.name}
      </div>
    );
  }
}

export default HelloWorld;
