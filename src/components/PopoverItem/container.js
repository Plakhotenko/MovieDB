import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PopoverItemComponent from './component'

class PopoverItem extends Component {
  onClick = () => {
    const { id, onAddMovieToList } = this.props
    onAddMovieToList(id)
  }

  render() {
    const { name } = this.props
    return (
      <PopoverItemComponent
        name={name}
        onClick={this.onClick}
      />
    )
  }
}

PopoverItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onAddMovieToList: PropTypes.func.isRequired
}

PopoverItem.defaultProps = {
  id: undefined,
  name: undefined
}

export default PopoverItem
