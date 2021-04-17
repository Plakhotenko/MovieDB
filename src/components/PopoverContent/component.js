import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const PopoverContent = ({
  closePopover, lists, addMovieToList, addMovieToNewList
}) => (
  <React.Fragment>
    <div>
      <Button
        type="link"
        onClick={() => {
          addMovieToNewList()
          closePopover()
        }}
      >
        Create new list ...
      </Button>
    </div>
    {lists.map(({ id, name }) => (
      <div key={id}>
        <Button
          onClick={() => {
            addMovieToList(id)
            closePopover()
          }}
          type="link"
        >
          {name}
        </Button>
      </div>
    ))}
  </React.Fragment>
)

PopoverContent.propTypes = {
  closePopover: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape()),
  addMovieToList: PropTypes.func.isRequired,
  addMovieToNewList: PropTypes.func.isRequired
}

PopoverContent.defaultProps = {
  lists: undefined
}

export default PopoverContent
