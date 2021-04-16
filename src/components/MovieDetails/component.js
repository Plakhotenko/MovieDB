import React from 'react'
import PropTypes from 'prop-types'
import {
  Layout,
  Row,
  Col,
  Typography,
  Popover,
  Button,
  Modal
} from 'antd'
import {
  HeartFilled,
  BookFilled,
  HeartOutlined,
  BookOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import PersonList from '../PersonList'
import MovieDetailsCarousel from '../MovieDetailsCarousel'
import MovieDetailsInfo from '../MovieDetailsInfo'
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
      popoverVisible: false
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
  }

  render() {
    const {
      modalVisible,
      popoverVisible
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
      crew,
      favorite,
      watchlist,
      onSetFavorite,
      onSetWatchlist
    } = this.props
    return (
      <Layout>
        <Header />
        {isLoading ? <div className="top-margin"><Loader /></div> : (
          <Layout.Content>
            <MovieDetailsCarousel
              images={backdrops}
              alt={title}
            />
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
              <MovieDetailsInfo
                overview={overview}
                lang={lang}
                runtime={runtime}
                budget={budget}
                revenue={revenue}
                genres={genres}
              />
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
  crew: PropTypes.arrayOf(PropTypes.shape()),
  favorite: PropTypes.bool,
  watchlist: PropTypes.bool,
  onSetFavorite: PropTypes.func.isRequired,
  onSetWatchlist: PropTypes.func.isRequired
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
  crew: undefined,
  favorite: false,
  watchlist: false
}

export default MovieDetailsComponent
