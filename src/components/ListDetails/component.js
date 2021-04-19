import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout, Row, Col, Typography, Empty
} from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import Header from '../Header'
import Loader from '../Loader'
import MoviesList from '../MoviesList'

const ListDetailsComponent = ({
  isLoading, movies, isMoviesEmpty, onClick, name, showDeleteListModal
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
            {!isLoading && (
              <Typography.Title>
                {name}
                {' '}
                <MinusCircleOutlined onClick={showDeleteListModal} />
              </Typography.Title>
            )}
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
      </div>
    </Layout.Content>
  </Layout>
)

ListDetailsComponent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  isLoading: PropTypes.bool.isRequired,
  isMoviesEmpty: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  showDeleteListModal: PropTypes.func.isRequired,
  name: PropTypes.string
}

ListDetailsComponent.defaultProps = {
  movies: [],
  name: undefined
}

export default ListDetailsComponent
