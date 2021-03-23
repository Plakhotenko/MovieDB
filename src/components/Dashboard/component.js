import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout, Row, Col, Pagination, Empty
} from 'antd'

import { PAGINATION_PARAMS } from 'Constants'
import Header from '../Header'
import Search from '../Search'
import Loader from '../Loader'
import MoviesList from '../MoviesList'

const DashboardComponent = ({
  movies, onPageChange, totalResults, currentPage, paginationDisabled, isLoading
}) => (
  <Layout>
    <Header />
    <Layout.Content>
      <Search />
      <div className="top-margin">
        {isLoading ? <Loader /> : <MoviesList movies={movies} /> }
        {!movies.length
        && (
        <Empty
          description="No movies found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
        ) }
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
              onChange={onPageChange}
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
  onPageChange: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
  currentPage: PropTypes.number,
  paginationDisabled: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired
}

DashboardComponent.defaultProps = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  paginationDisabled: true
}

export default DashboardComponent
