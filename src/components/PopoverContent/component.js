import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import PopoverItem from '../PopoverItem'

const PopoverContentComponent = ({
  lists, onAddMovieToNewList, onAddMovieToList
}) => (
  <Fragment>
    <div>
      <Button
        type="link"
        onClick={onAddMovieToNewList}
      >
        Create new list ...
      </Button>
    </div>
    {lists.map(({ id, name }) => (
      <PopoverItem
        key={id}
        id={id}
        name={name}
        onAddMovieToList={onAddMovieToList}
      />
    ))}
  </Fragment>
)

PopoverContentComponent.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape()),
  onAddMovieToNewList: PropTypes.func.isRequired,
  onAddMovieToList: PropTypes.func.isRequired
}

PopoverContentComponent.defaultProps = {
  lists: undefined
}

export default PopoverContentComponent
