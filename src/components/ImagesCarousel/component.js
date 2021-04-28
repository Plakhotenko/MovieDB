import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { IMAGES_BASE_URL } from 'Constants'
import PropTypes from 'prop-types'

const ImagesCarousel = ({ images }) => (
  <Row type="flex">
    <Col span={24}>
      <Carousel autoplay>
        {images.map(({ filePath }) => (
          <div key={filePath}>
            <img
              className="movie-image"
              src={`${IMAGES_BASE_URL}/${filePath}`}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </Col>
  </Row>
)

ImagesCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape())
}

ImagesCarousel.defaultProps = {
  images: undefined
}

export default ImagesCarousel
