import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { IMAGES_BASE_URL } from '../../constants'

const Movie = ({
  actions, posterPath, title, description
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
    <Card.Meta
      title={title}
      description={description}
    />
  </Card>
)

Movie.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
}

Movie.defaultProps = {
  actions: [],
  title: undefined,
  description: undefined
}

export default Movie
