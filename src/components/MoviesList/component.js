import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import MovieItem from '../MovieItem'

const MoviesList = ({ movies, onClick }) => (
  <Row
    type="flex"
    gutter={16}
  >
    <Col
      className="gutter-row"
      span={20}
      offset={2}
    >
      <Row
        gutter={{
          xs: 8, sm: 16, md: 24, lg: 32
        }}
      >
        {movies.map(({
          id, posterPath, title, name, overview
        }) => (
          <Col
            key={id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <MovieItem
              posterPath={posterPath}
              title={title || name}
              description={overview}
              id={id}
              onClick={onClick}
            />
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func
}

MoviesList.defaultProps = {
  movies: [],
  onClick: undefined
}

export default MoviesList
