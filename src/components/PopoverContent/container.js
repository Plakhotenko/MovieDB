import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PopoverContentComponent from './component'

class PopoverContent extends Component {
  onAddMovieToList = (id) => {
    const { addMovieToList, closePopover } = this.props
    addMovieToList(id)
    closePopover()
  }

  onAddMovieToNewList = () => {
    const { addMovieToNewList, closePopover } = this.props
    addMovieToNewList()
    closePopover()
  }

  render() {
    const { lists } = this.props
    return (
      <PopoverContentComponent
        lists={lists}
        onAddMovieToNewList={this.onAddMovieToNewList}
        onAddMovieToList={this.onAddMovieToList}
      />
    )
  }
}

PopoverContent.propTypes = {
  addMovieToList: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired,
  addMovieToNewList: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape())
}

PopoverContent.defaultProps = {
  lists: undefined
}

export default PopoverContent
