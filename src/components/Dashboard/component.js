import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout, Row, Col, Pagination
} from 'antd'

import { PAGINATION_PARAMS } from 'Constants'
import Header from '../Header'
import Search from '../Search'
import Loader from '../Loader'
import MoviesList from '../MoviesList'

const DashboardComponent = ({
  movies, getTrendingMoviesHandler, totalResults, currentPage, paginationDisabled
}) => (
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
            <Pagination
              current={currentPage}
              total={totalResults}
              pageSize={PAGINATION_PARAMS.pageSize}
              showSizeChanger={false}
              hideOnSinglePage
              disabled={paginationDisabled}
              onChange={page => getTrendingMoviesHandler(page)}
              className="pagination"
            />
          </Col>
        </Row>
      </div>
    </Layout.Content>
  </Layout>
)

DashboardComponent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  getTrendingMoviesHandler: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
  currentPage: PropTypes.number,
  paginationDisabled: PropTypes.bool
}

DashboardComponent.defaultProps = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  paginationDisabled: true
}

export default DashboardComponent
