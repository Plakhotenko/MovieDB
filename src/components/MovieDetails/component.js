import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Row,
  Col,
  Carousel,
  Typography,
  Tag,
  Popover,
  Button,
  Modal
} from 'antd'
import { HeartOutlined, BookOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { IMAGES_BASE_URL } from 'Constants'
import PersonList from '../PersonList'
import Loader from '../Loader'
import Header from '../Header'
import CreateListModal from '../CreateListModal'

const PopoverContent = ({ openModal, closePopover }) => (
  <React.Fragment>
    <div>
      <Button
        type="link"
        onClick={() => {
          closePopover()
          openModal()
        }}
      >
        Create new list ...
      </Button>
    </div>
    <div>
      <Button type="link">List 1</Button>
    </div>
    <div>
      <Button type="link">List 2</Button>
    </div>
    <div>
      <Button type="link">List 3</Button>
    </div>
  </React.Fragment>
)

PopoverContent.propTypes = {
  openModal: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
}

class MovieDetailsComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      popoverVisible: false,
      bookmarked: false,
      watchlist: false
    }

    this.handleVisiblePopover = (visible) => {
      this.setState({ popoverVisible: visible })
    }

    this.showModal = () => {
      this.setState({ modalVisible: true })
    }

    this.hideModal = () => {
      this.setState({ modalVisible: false })
    }

    this.handleWatchlist = () => {
      this.setState(state => ({ watchlist: !state.watchlist }))
    }

    this.handleBookmark = () => {
      this.setState(state => ({ bookmarked: !state.bookmarked }))
    }
  }

  render() {
    const {
      modalVisible,
      popoverVisible,
      bookmarked,
      watchlist
    } = this.state
    const {
      isLoading,
      title,
      overview,
      lang,
      runtime,
      budget,
      revenue,
      genres,
      backdrops,
      cast,
      crew
    } = this.props
    return (
      <Layout>
        <Header />
        {isLoading ? <div className="top-margin"><Loader /></div> : (
          <Layout.Content>
            <Row type="flex">
              <Col span={24}>
                <Carousel autoplay>
                  {backdrops.map(({ file_path: filePath }) => (
                    <div key={filePath}>
                      <img
                        className="movie-image"
                        src={`${IMAGES_BASE_URL}/${filePath}`}
                        alt={title}
                      />
                    </div>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <div className="top-margin">
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
                      onVisibleChange={this.handleVisiblePopover}
                      content={(
                        <PopoverContent
                          openModal={this.showModal}
                          closePopover={() => this.handleVisiblePopover(false)}
                        />
                      )}
                    >
                      <PlusCircleOutlined />
                    </Popover>
                    {' '}
                    <HeartOutlined
                      theme={watchlist ? 'filled' : undefined}
                      onClick={this.handleWatchlist}
                    />
                    {' '}
                    <BookOutlined
                      theme={bookmarked ? 'filled' : undefined}
                      onClick={this.handleBookmark}
                    />
                  </Typography.Title>
                  <Typography.Title level={3}>Overview</Typography.Title>
                  <Typography.Paragraph>
                    { overview }
                  </Typography.Paragraph>
                </Col>
              </Row>
              <Row>
                <Col
                  span={20}
                  offset={2}
                >
                  <Typography.Paragraph>
                    <b>Original Language: </b>
                    <span>{lang}</span>
                  </Typography.Paragraph>
                </Col>
                <Col
                  span={20}
                  offset={2}
                >
                  <Typography.Paragraph>
                    <b>Runtime: </b>
                    <span>{runtime}</span>
                  </Typography.Paragraph>
                </Col>
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
                <Col
                  span={20}
                  offset={2}
                >
                  <Typography.Paragraph>
                    <b>Genres: </b>
                    {genres && genres.map(item => <Tag key={item.id}>{item.name}</Tag>)}
                  </Typography.Paragraph>
                </Col>
              </Row>
              <PersonList
                heading="Casts"
                persons={cast}
              />
              <PersonList
                heading="Crew"
                persons={crew}
              />
            </div>
          </Layout.Content>
        )}
        <Modal
          visible={modalVisible}
          onCancel={this.hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal>
      </Layout>
    )
  }
}

MovieDetailsComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  overview: PropTypes.string,
  lang: PropTypes.string,
  runtime: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.shape()),
  backdrops: PropTypes.arrayOf(PropTypes.shape()),
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.arrayOf(PropTypes.shape())
}

MovieDetailsComponent.defaultProps = {
  title: undefined,
  overview: undefined,
  lang: undefined,
  runtime: undefined,
  budget: undefined,
  revenue: undefined,
  genres: undefined,
  backdrops: undefined,
  cast: undefined,
  crew: undefined
}

export default MovieDetailsComponent
