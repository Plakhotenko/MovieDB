import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Typography,
  Popover
} from 'antd'
import {
  HeartFilled,
  BookFilled,
  HeartOutlined,
  BookOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import PopoverContent from '../PopoverContent'

const MovieDetailsHeaderComponent = ({
  title,
  favorite,
  watchlist,
  onSetFavorite,
  onSetWatchlist,
  lists,
  addMovieToList,
  addMovieToNewList,
  popoverVisible,
  handleVisibleChange,
  closePopover
}) => (
  <Row>
    <Col
      span={20}
      offset={2}
    >
      <Typography.Title>
        <span>{title}</span>
        {' '}
        <Popover
          title="Add movie to list"
          trigger="click"
          visible={popoverVisible}
          onVisibleChange={handleVisibleChange}
          content={(
            <PopoverContent
              closePopover={closePopover}
              lists={lists}
              addMovieToList={addMovieToList}
              addMovieToNewList={addMovieToNewList}
            />
          )}
        >
          <PlusCircleOutlined />
        </Popover>
        {' '}
        <button
          onClick={onSetFavorite}
          type="button"
          aria-label={favorite ? 'remove from favorite' : 'mark as favorite'}
          title={favorite ? 'remove from favorite' : 'mark as favorite'}
        >
          {favorite ? <HeartFilled /> : <HeartOutlined />}
        </button>
        {' '}
        <button
          onClick={onSetWatchlist}
          type="button"
          aria-label={watchlist ? 'remove from watchlist' : 'add to watchlist'}
          title={watchlist ? 'remove from watchlist' : 'add to watchlist'}
        >
          {watchlist ? <BookFilled /> : <BookOutlined />}
        </button>
      </Typography.Title>
    </Col>
  </Row>
)

MovieDetailsHeaderComponent.propTypes = {
  title: PropTypes.string,
  favorite: PropTypes.bool,
  watchlist: PropTypes.bool,
  onSetFavorite: PropTypes.func.isRequired,
  onSetWatchlist: PropTypes.func.isRequired,
  addMovieToList: PropTypes.func.isRequired,
  addMovieToNewList: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape()),
  popoverVisible: PropTypes.bool,
  handleVisibleChange: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
}

MovieDetailsHeaderComponent.defaultProps = {
  title: undefined,
  favorite: false,
  watchlist: false,
  lists: undefined,
  popoverVisible: false
}

export default MovieDetailsHeaderComponent
