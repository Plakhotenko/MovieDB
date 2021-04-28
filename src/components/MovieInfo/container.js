import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { movieSelector } from 'Store/features/movieDetails/selectors'
import MovieInfoComponent from './component'

const MovieInfo = ({
  movie: {
    overview,
    originalLanguage,
    runtime,
    budget,
    revenue,
    genres
  }
}) => (
  <MovieInfoComponent
    overview={overview}
    originalLanguage={originalLanguage}
    runtime={runtime}
    budget={budget}
    revenue={revenue}
    genres={genres}
  />
)

const mapStateToProps = (state, { movieId }) => ({
  movie: movieSelector(state, movieId)
})

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string,
    originalLanguage: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape())
  })
}

MovieInfo.defaultProps = {
  movie: {
    overview: undefined,
    originalLanguage: undefined,
    runtime: undefined,
    budget: undefined,
    revenue: undefined,
    genres: undefined
  }
}

export default connect(mapStateToProps)(MovieInfo)
