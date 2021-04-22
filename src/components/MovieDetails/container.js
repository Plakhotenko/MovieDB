import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { getLists as getListsAction } from 'Store/features/lists/actions'
import {
  getMoviesDetails as getMoviesDetailsAction,
  setFavorite as setFavoriteAction,
  setWatchlist as setWatchlistAction,
  addMovieToList as addMovieToListAction,
  addMovieToNewList as addMovieToNewListAction
} from 'Store/features/movieDetails/actions'
import { setModal as setModalAction } from 'Store/features/modal/actions'
import { movieDetailsSelector, castSelector, crewSelector } from 'Store/features/movieDetails/selectors'
import { listsSelector } from 'Store/features/lists/selectors'
import { createListModal } from 'Store/features/modal/constants'
import MovieDetailsComponent from './component'

class MovieDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popoverVisible: false
    }
  }

  componentDidMount() {
    const { getLists, getMoviesDetails, match: { params: { movieId } } } = this.props
    getMoviesDetails(movieId)
    getLists()
  }

  handleVisibleChange = (visible) => {
    this.setState({ popoverVisible: visible })
  }

  onAddMovieToList = (listId) => {
    const { match: { params: { movieId } }, addMovieToList } = this.props
    addMovieToList({ listId, movieId })
  }

  onAddMovieToNewList = () => {
    const { setModal, addMovieToNewList, match: { params: { movieId } } } = this.props
    setModal({
      component: createListModal,
      action: addMovieToNewList,
      data: {
        movieId
      }
    })
  }

  onSetFavorite = () => {
    const { match: { params: { movieId } }, movie: { favorite }, setFavorite } = this.props
    setFavorite({ id: movieId, favorite: !favorite })
  }

  onSetWatchlist = () => {
    const { match: { params: { movieId } }, movie: { watchlist }, setWatchlist } = this.props
    setWatchlist({ id: movieId, watchlist: !watchlist })
  }

  closePopover = () => {
    this.setState({ popoverVisible: false })
  }

  render() {
    const { popoverVisible } = this.state
    const {
      isLoading,
      match: { params: { movieId } },
      cast,
      crew,
      movie: {
        title,
        overview,
        originalLanguage,
        runtime,
        budget,
        revenue,
        genres,
        backdrops,
        favorite,
        watchlist
      },
      lists
    } = this.props
    return (
      <MovieDetailsComponent
        isLoading={isLoading}
        id={movieId}
        title={title}
        overview={overview}
        lang={originalLanguage}
        runtime={runtime}
        budget={budget}
        revenue={revenue}
        genres={genres}
        backdrops={backdrops}
        cast={cast}
        crew={crew}
        favorite={favorite}
        watchlist={watchlist}
        onSetFavorite={this.onSetFavorite}
        onSetWatchlist={this.onSetWatchlist}
        lists={lists}
        addMovieToList={this.onAddMovieToList}
        addMovieToNewList={this.onAddMovieToNewList}
        popoverVisible={popoverVisible}
        handleVisibleChange={this.handleVisibleChange}
        closePopover={this.closePopover}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params: { movieId } } }) => ({
  isLoading: state.movieDetails.isLoading,
  movie: movieDetailsSelector(state, movieId),
  cast: castSelector(state, movieId),
  crew: crewSelector(state, movieId),
  lists: listsSelector(state)
})

const mapDispatchToProps = {
  getMoviesDetails: getMoviesDetailsAction,
  setFavorite: setFavoriteAction,
  setWatchlist: setWatchlistAction,
  getLists: getListsAction,
  addMovieToList: addMovieToListAction,
  setModal: setModalAction,
  addMovieToNewList: addMovieToNewListAction
}

MovieDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.arrayOf(PropTypes.shape()),
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    originalLanguage: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape()),
    backdrops: PropTypes.arrayOf(PropTypes.shape()),
    favorite: PropTypes.bool,
    watchlist: PropTypes.bool
  }),
  getMoviesDetails: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  setWatchlist: PropTypes.func.isRequired,
  getLists: PropTypes.func.isRequired,
  addMovieToList: PropTypes.func.isRequired,
  addMovieToNewList: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape())
}

MovieDetails.defaultProps = {
  cast: undefined,
  crew: undefined,
  movie: {
    title: undefined,
    overview: undefined,
    originalLanguage: undefined,
    runtime: undefined,
    budget: undefined,
    revenue: undefined,
    genres: undefined,
    backdrops: undefined,
    favorite: false,
    watchlist: false
  },
  lists: undefined
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
