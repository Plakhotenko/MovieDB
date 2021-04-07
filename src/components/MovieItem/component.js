import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { IMAGES_BASE_URL } from 'Constants'

const MovieComponent = ({
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

MovieComponent.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
}

MovieComponent.defaultProps = {
  actions: [],
  title: undefined,
  description: undefined
}

export default MovieComponent
