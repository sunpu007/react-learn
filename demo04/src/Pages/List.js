import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <h1>list->{this.state.id}</h1>
    );
  }
  componentDidMount () {
    console.log(this.props)
    this.setState({
      id: this.props.match.params.id
    })
  }
}
 
export default List;