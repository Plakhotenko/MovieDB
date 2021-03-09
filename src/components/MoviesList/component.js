import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import Movie from '../MovieItem'

const MoviesList = ({ movies }) => (
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
          id, poster_path: posterPath, title, name, overview
        }) => (
          <Col
            key={id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <Movie
              posterPath={posterPath}
              title={title || name}
              description={overview}
            />
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape)
}

MoviesList.defaultProps = {
  movies: []
}

export default MoviesList
