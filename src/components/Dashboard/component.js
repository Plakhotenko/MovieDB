import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout, Row, Col, Pagination
} from 'antd'

import Header from '../Header'
import Search from '../Search'
import Loader from '../Loader'
import MoviesList from '../MoviesList'
import { PAGINATION_PARAMS } from '../../constants'

const DashboardComponent = ({ movies, fetchTrendingMoviesHandler, totalResults }) => (
  <Layout>
    <Header />
    <Layout.Content>
      <Search />
      <div className="top-margin">
        {movies.length ? <MoviesList movies={movies} /> : <Loader /> }
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            { (movies.length >= PAGINATION_PARAMS.pageSize)
            && (
            <Pagination
              defaultCurrent={1}
              total={totalResults}
              pageSize={PAGINATION_PARAMS.pageSize}
              disabled={false}
              className="pagination"
              onChange={page => fetchTrendingMoviesHandler(page)}
            />
            )
            }
          </Col>
        </Row>
      </div>
    </Layout.Content>
  </Layout>
)

DashboardComponent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  fetchTrendingMoviesHandler: PropTypes.func.isRequired,
  totalResults: PropTypes.number
}

DashboardComponent.defaultProps = {
  movies: [],
  totalResults: 0
}

export default DashboardComponent
