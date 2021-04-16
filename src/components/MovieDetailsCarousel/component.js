import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { IMAGES_BASE_URL } from 'Constants'
import PropTypes from 'prop-types'

const MovieDetailsCarousel = ({ images, alt }) => (
  <Row type="flex">
    <Col span={24}>
      <Carousel autoplay>
        {images.map(({ file_path: filePath }) => (
          <div key={filePath}>
            <img
              className="movie-image"
              src={`${IMAGES_BASE_URL}/${filePath}`}
              alt={alt}
            />
          </div>
        ))}
      </Carousel>
    </Col>
  </Row>
)

MovieDetailsCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
  alt: PropTypes.string
}

MovieDetailsCarousel.defaultProps = {
  images: undefined,
  alt: undefined
}

export default MovieDetailsCarousel
