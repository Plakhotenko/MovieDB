import React from 'react'
import PropTypes from 'prop-types'
import ListComponent from './component'

const List = ({
  title, description, id, removeList
}) => {
  const onClick = () => {
    removeList(id)
  }
  return (
    <ListComponent
      title={title}
      description={description}
      id={id}
      onClick={onClick}
    />
  )
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
