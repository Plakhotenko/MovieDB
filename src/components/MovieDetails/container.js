import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import {
  getMoviesDetails as getMoviesDetailsAction,
  setFavorite as setFavoriteAction,
  setWatchlist as setWatchlistAction
} from 'Store/features/movieDetails/actions'
import { movieDetailsSelector, castSelector, crewSelector } from 'Store/features/movieDetails/selectors'
import MovieDetailsComponent from './component'

class MovieDetails extends Component {
  componentDidMount() {
    const { getMoviesDetails, match: { params: { movieId } } } = this.props
    getMoviesDetails(movieId)
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
      }
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
      />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.movieDetails.isLoading,
  id: state.movieDetails.id,
  movie: movieDetailsSelector(state),
  cast: castSelector(state),
  crew: crewSelector(state)
})

const mapDispatchToProps = {
  getMoviesDetails: getMoviesDetailsAction,
  setFavorite: setFavoriteAction,
  setWatchlist: setWatchlistAction
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
