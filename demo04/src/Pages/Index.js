import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom' // Redirect

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {uid:123,title:'技术胖的个人博客-1'},
        {uid:456,title:'技术胖的个人博客-2'},
        {uid:789,title:'技术胖的个人博客-3'},
      ]
    }
    this.props.history.push('/home/')
  }
  render() { 
    return (
      <Fragment>
        {/* <Redirect to='/home/' /> */}
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item.uid}>
                  <Link to={`/list/${item.uid}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
}
 
export default Index;