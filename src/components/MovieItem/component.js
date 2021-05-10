import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { IMAGES_BASE_URL } from 'Constants'

const MovieItemComponent = ({
  actions, posterPath, title, description, id
}) => (
  <Card
    hoverable
    cover={(
      <img
        alt={title}
        src={`${IMAGES_BASE_URL}${posterPath}`}
      />
    )}
    className="top-margin"
    actions={actions}
  >
    <Link to={`/movie/${id}`}>
      <Card.Meta
        title={title}
        description={description}
      />
    </Link>
  </Card>
)

MovieItemComponent.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired
}

MovieItemComponent.defaultProps = {
  actions: [],
  title: undefined,
  description: undefined
}

export default MovieItemComponent
