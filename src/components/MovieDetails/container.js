import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { getLists as getListsAction } from 'Store/features/lists/actions'
import {
  getMoviesDetails as getMoviesDetailsAction,
  setFavorite as setFavoriteAction,
  setWatchlist as setWatchlistAction,
  addMovieToList as addMovieToListAction
} from 'Store/features/movieDetails/actions'
import { setModal as setModalAction } from 'Store/features/modal/actions'
import { movieDetailsSelector, castSelector, crewSelector } from 'Store/features/movieDetails/selectors'
import { listsSelector } from 'Store/features/lists/selectors'
import { createListModal } from 'Store/features/modal/constants'
import MovieDetailsComponent from './component'

class MovieDetails extends Component {
  componentDidMount() {
    const { getLists, getMoviesDetails, match: { params: { movieId } } } = this.props
    getMoviesDetails(movieId)
    getLists()
  }

  onAddMovieToList = (listId) => {
    const { id: movieId, addMovieToList } = this.props
    addMovieToList({ listId, movieId })
  }

  onAddMovieToNewList = () => {
    const { setModal } = this.props
    setModal(createListModal)
  }

  onSetFavorite = () => {
    const { id, movie: { favorite }, setFavorite } = this.props
    setFavorite({ id, favorite: !favorite })
  }

  onSetWatchlist = () => {
    const { id, movie: { watchlist }, setWatchlist } = this.props
    setWatchlist({ id, watchlist: !watchlist })
  }

  render() {
    const {
      isLoading,
      id,
      cast,
      crew,
      movie: {
        title,
        overview,
        original_language: lang,
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
        id={id}
        title={title}
        overview={overview}
        lang={lang}
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
      />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.movieDetails.isLoading,
  id: state.movieDetails.id,
  movie: movieDetailsSelector(state),
  cast: castSelector(state),
  crew: crewSelector(state),
  lists: listsSelector(state)
})

const mapDispatchToProps = {
  getMoviesDetails: getMoviesDetailsAction,
  setFavorite: setFavoriteAction,
  setWatchlist: setWatchlistAction,
  getLists: getListsAction,
  addMovieToList: addMovieToListAction,
  setModal: setModalAction
}

MovieDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.string,
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.arrayOf(PropTypes.shape()),
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    original_language: PropTypes.string,
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
  setModal: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape())
}

MovieDetails.defaultProps = {
  id: undefined,
  cast: undefined,
  crew: undefined,
  movie: {
    title: undefined,
    overview: undefined,
    original_language: undefined,
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
