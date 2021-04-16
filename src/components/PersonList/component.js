import React, { Fragment } from 'react'
import {
  Row,
  Col,
  Typography,
  Card
} from 'antd'
import PropTypes from 'prop-types'
import { IMAGES_BASE_URL } from 'Constants'

const PersonList = ({ persons, heading }) => (
  <Fragment>
    <Row>
      <Col
        span={10}
        offset={2}
        className="top-margin"
      >
        <Typography.Title level={3}>{heading}</Typography.Title>
      </Col>
    </Row>
    <Row
      gutter={8}
      type="flex"
    >
      <Col
        span={20}
        offset={2}
      >
        <Row
          gutter={{
            xs: 8, sm: 16, md: 24, lg: 32
          }}
        >
          {persons.map(({
            credit_id: creditId, profile_path: profilePath, name, character, job
          }) => (
            <Col
              key={creditId}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
            >
              <Card
                cover={(
                  <img
                    alt={`${name} ${character || job}`}
                    src={`${IMAGES_BASE_URL}/${profilePath}`}
                  />
              )}
                className="top-margin"
              >
                <Card.Meta
                  title={name}
                  description={character || job}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Fragment>
)

PersonList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape()),
  heading: PropTypes.string
}

PersonList.defaultProps = {
  persons: undefined,
  heading: undefined
}

export default PersonList
