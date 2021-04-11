import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListComponent from './component'

class List extends Component {
  onClick = () => {
    const { removeList, id } = this.props
    removeList(id)
  }

  render() {
    const { title, description, id } = this.props
    return (
      <ListComponent
        title={title}
        description={description}
        onClick={this.onClick}
        id={id}
      />
    )
  }
}

List.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  removeList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

List.defaultProps = {
  title: undefined,
  description: undefined
}

export default List
