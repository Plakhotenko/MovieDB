import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DeleteOutlined } from '@ant-design/icons'
import MovieComponent from './component'

class Movie extends Component {
  onClickHandler = () => {
    const { id, onClick } = this.props
    onClick(id)
  }

  render() {
    const {
      posterPath, title, description, onClick
    } = this.props
    return (
      <MovieComponent
        posterPath={posterPath}
        title={title}
        description={description}
        actions={
          onClick ? [
            <DeleteOutlined
              key="delete"
              onClick={this.onClickHandler}
            />
          ] : null
        }
      />
    )
  }
}

Movie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number.isRequired
}

Movie.defaultProps = {
  title: undefined,
  description: undefined,
  onClick: undefined
}

export default Movie
