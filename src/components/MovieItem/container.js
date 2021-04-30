import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DeleteOutlined } from '@ant-design/icons'
import MovieItemComponent from './component'

class MovieItem extends Component {
  onClickHandler = () => {
    const { id, onClick } = this.props
    onClick(id)
  }

  render() {
    const {
      posterPath, title, description, onClick, id
    } = this.props
    return (
      <MovieItemComponent
        posterPath={posterPath}
        title={title}
        description={description}
        id={id}
        actions={
          onClick ? [
            <DeleteOutlined
              aria-label="delete movie"
              key="delete"
              onClick={this.onClickHandler}
            />
          ] : null
        }
      />
    )
  }
}

MovieItem.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number.isRequired
}

MovieItem.defaultProps = {
  title: undefined,
  description: undefined,
  onClick: undefined
}

export default MovieItem
