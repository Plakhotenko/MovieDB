import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getMoviesDetails as getMoviesDetailsAction } from 'Store/features/movieDetails/actions'
import { movieSelector, castSelector, crewSelector } from 'Store/features/movieDetails/selectors'
import MovieDetailsComponent from './component'

class MovieDetails extends Component {
  componentDidMount() {
    const { getMoviesDetails, match: { params: { movieId } } } = this.props
    getMoviesDetails(movieId)
  }

  render() {
    const {
      isLoading,
      match: { params: { movieId } },
      cast,
      crew,
      movie: {
        backdrops
      }
    } = this.props
    return (
      <MovieDetailsComponent
        isLoading={isLoading}
        movieId={movieId}
        backdrops={backdrops}
        cast={cast}
        crew={crew}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params: { movieId } } }) => ({
  isLoading: state.movieDetails.isLoading,
  movie: movieSelector(state, movieId),
  cast: castSelector(state, movieId),
  crew: crewSelector(state, movieId)
})

const mapDispatchToProps = {
  getMoviesDetails: getMoviesDetailsAction
}

MovieDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.arrayOf(PropTypes.shape()),
  movie: PropTypes.shape({
    backdrops: PropTypes.arrayOf(PropTypes.shape())
  }),
  getMoviesDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired
}

MovieDetails.defaultProps = {
  cast: undefined,
  crew: undefined,
  movie: {
    backdrops: undefined
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
