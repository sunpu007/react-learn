import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  /**
   * 也就是说这个组件第一次存在于Dom中，函数是不会被执行的;
   * 如果已经存在于Dom中，函数才会被执行。
   */
  // componentWillReceiveProps () {
  //   console.log('child-componentWillReceiveProps...')
  // }
  // componentWillUnmount () {
  //   console.log('child-componentWillUnmount...')
  // }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.content!==nextProps.content
  }
  render() {
    console.log('child-render...')
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}为您做-{this.props.content}
      </li>
    )
  }

  handleClick () {
    this.props.deleteItem(this.props.index)
  }
}

XiaojiejieItem.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps = {
  avname: '苍井空'
}
 
export default XiaojiejieItem;