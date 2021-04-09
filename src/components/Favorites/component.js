import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout, Row, Col, Typography, Pagination, Empty
} from 'antd'
import { PAGINATION_PARAMS } from 'Constants'
import Header from '../Header'
import Loader from '../Loader'
import MoviesList from '../MoviesList'

const FavoritesComponent = ({
  isLoading, movies, currentPage, totalResults, paginationDisabled, onPageChange,
  isMoviesEmpty, onClick
}) => (
  <Layout>
    <Header />
    <Layout.Content>
      <Row>
        <Col
          offset={2}
          span={20}
        >
          <div className="top-margin">
            <Typography.Title>Favorites</Typography.Title>
          </div>
        </Col>
      </Row>
      <div className="top-margin">
        {isLoading ? <Loader /> : (
          <MoviesList
            onClick={onClick}
            movies={movies}
          />
        )}
        {isMoviesEmpty && !isLoading && (
          <Empty
            description="No movies found"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
        <Row
          type="flex"
          justify="center"
        >
          <Col>
            {!isLoading && (
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
            )}
          </Col>
        </Row>
      </div>
    </Layout.Content>
  </Layout>
)

FavoritesComponent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  onPageChange: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
  currentPage: PropTypes.number,
  paginationDisabled: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  isMoviesEmpty: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

FavoritesComponent.defaultProps = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  paginationDisabled: true
}

export default FavoritesComponent
