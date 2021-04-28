import React from 'react'
import {
  Row, Col, Typography, Tag
} from 'antd'
import PropTypes from 'prop-types'

const MovieInfoComponent = ({
  overview,
  originalLanguage,
  runtime,
  budget,
  revenue,
  genres
}) => (
  <Row>
    {overview && (
      <Col
        span={20}
        offset={2}
      >
        <Typography.Title level={3}>Overview</Typography.Title>
        <Typography.Paragraph>{overview}</Typography.Paragraph>
      </Col>
    )}
    {originalLanguage && (
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Original Language: </b>
          <span>{originalLanguage}</span>
        </Typography.Paragraph>
      </Col>
    )}
    {runtime && (
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Runtime: </b>
          <span>{runtime}</span>
        </Typography.Paragraph>
      </Col>
    )}
    {!!budget && (
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Budget: </b>
          <span>
            $
            {budget}
          </span>
        </Typography.Paragraph>
      </Col>
    )}
    {!!revenue && (
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Revenue: </b>
          <span>
            $
            {revenue}
          </span>
        </Typography.Paragraph>
      </Col>
    )}
    {genres && (
      <Col
        span={20}
        offset={2}
      >
        <Typography.Paragraph>
          <b>Genres: </b>
          {genres.map(item => <Tag key={item.id}>{item.name}</Tag>)}
        </Typography.Paragraph>
      </Col>
    )}
  </Row>
)

MovieInfoComponent.propTypes = {
  overview: PropTypes.string,
  originalLanguage: PropTypes.string,
  runtime: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.shape())
}

MovieInfoComponent.defaultProps = {
  overview: undefined,
  originalLanguage: undefined,
  runtime: undefined,
  budget: undefined,
  revenue: undefined,
  genres: undefined
}

export default MovieInfoComponent
