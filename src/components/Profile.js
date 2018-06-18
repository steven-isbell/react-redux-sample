import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateNameAction } from '../ducks/reducer';

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
        {/* updateNameAction is a function coming from redux. It will send our
          updates back to the redux store for processing.
        */}
        <input onChange={this.props.updateNameAction} />
        {/* name is a value being retrieved from the redux store */}
        {this.props.name}
      </div>
    );
  }
}

// ES5
// function mapStateToProps(state) {
//   return state;
// }

// ES6
const mapStateToProps = state => state;

// Instead of using a variable for this object, we put it directly as the second
// argument to our connect method
// const mapDispatchToProps = {
//   updateNameAction
// }

// let decorator = connect(mapStateToProps, mapDispatchToProps)
// export default decorator(Profile);
//This is often done in a single line of code like this:
export default connect(
  mapStateToProps,
  { updateNameAction }
)(Profile);
