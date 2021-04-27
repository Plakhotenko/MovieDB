import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLists as getListsAction } from 'Store/features/lists/actions'
import {
  setFavorite as setFavoriteAction,
  setWatchlist as setWatchlistAction,
  addMovieToList as addMovieToListAction,
  addMovieToNewList as addMovieToNewListAction
} from 'Store/features/movieDetails/actions'
import { setModal as setModalAction } from 'Store/features/modal/actions'
import { movieSelector } from 'Store/features/movieDetails/selectors'
import { listsSelector } from 'Store/features/lists/selectors'
import { createListModal } from 'Store/features/modal/constants'
import MovieDetailsHeaderComponent from './component'

class MovieDetailsHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popoverVisible: false
    }
  }

  componentDidMount() {
    const { getLists } = this.props
    getLists()
  }

  onVisibleChange = (visible) => {
    this.setState({ popoverVisible: visible })
  }

  onAddMovieToList = (listId) => {
    const { movieId, addMovieToList } = this.props
    addMovieToList({ listId, movieId })
  }

  onAddMovieToNewList = () => {
    const { setModal, addMovieToNewList, movieId } = this.props
    setModal({
      name: createListModal,
      action: addMovieToNewList,
      data: {
        movieId
      }
    })
  }

  onSetFavorite = () => {
    const { movieId, movie: { favorite }, setFavorite } = this.props
    setFavorite({ id: movieId, favorite: !favorite })
  }

  onSetWatchlist = () => {
    const { movieId, movie: { watchlist }, setWatchlist } = this.props
    setWatchlist({ id: movieId, watchlist: !watchlist })
  }

  closePopover = () => {
    this.setState({ popoverVisible: false })
  }

  render() {
    const { popoverVisible } = this.state
    const {
      movie: {
        title,
        favorite,
        watchlist
      },
      lists
    } = this.props
    return (
      <MovieDetailsHeaderComponent
        title={title}
        favorite={favorite}
        watchlist={watchlist}
        onSetFavorite={this.onSetFavorite}
        onSetWatchlist={this.onSetWatchlist}
        lists={lists}
        addMovieToList={this.onAddMovieToList}
        addMovieToNewList={this.onAddMovieToNewList}
        popoverVisible={popoverVisible}
        onVisibleChange={this.onVisibleChange}
        closePopover={this.closePopover}
      />
    )
  }
}

const mapStateToProps = (state, { movieId }) => ({
  movie: movieSelector(state, movieId),
  lists: listsSelector(state)
})

const mapDispatchToProps = {
  setFavorite: setFavoriteAction,
  setWatchlist: setWatchlistAction,
  getLists: getListsAction,
  addMovieToList: addMovieToListAction,
  setModal: setModalAction,
  addMovieToNewList: addMovieToNewListAction
}

MovieDetailsHeader.propTypes = {
  movieId: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    favorite: PropTypes.bool,
    watchlist: PropTypes.bool
  }),
  lists: PropTypes.arrayOf(PropTypes.shape()),
  setFavorite: PropTypes.func.isRequired,
  setWatchlist: PropTypes.func.isRequired,
  getLists: PropTypes.func.isRequired,
  addMovieToList: PropTypes.func.isRequired,
  addMovieToNewList: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired
}

MovieDetailsHeader.defaultProps = {
  movie: {
    title: undefined,
    favorite: false,
    watchlist: false
  },
  lists: undefined
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsHeader)
