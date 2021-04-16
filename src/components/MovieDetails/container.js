import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { getMoviesDetails as getMoviesDetailsAction } from 'Store/features/movieDetails/actions'
import { movieDetailsSelector, castSelector, crewSelector } from 'Store/features/movieDetails/selectors'
import MovieDetailsComponent from './component'

class MovieDetails extends Component {
  componentDidMount() {
    const { getMoviesDetails, match: { params: { movieId } } } = this.props
    getMoviesDetails(movieId)
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
        backdrops
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
  getMoviesDetails: getMoviesDetailsAction
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
    backdrops: undefined
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
