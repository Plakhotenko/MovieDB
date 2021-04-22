import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { movieDetailsSelector } from 'Store/features/movieDetails/selectors'
import MovieDetailsInfoComponent from './component'

const MovieDetailsInfo = ({
  movie: {
    overview,
    originalLanguage,
    runtime,
    budget,
    revenue,
    genres
  }
}) => (
  <MovieDetailsInfoComponent
    overview={overview}
    originalLanguage={originalLanguage}
    runtime={runtime}
    budget={budget}
    revenue={revenue}
    genres={genres}
  />
)

const mapStateToProps = (state, { movieId }) => ({
  movie: movieDetailsSelector(state, movieId)
})

MovieDetailsInfo.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string,
    originalLanguage: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape())
  })
}

MovieDetailsInfo.defaultProps = {
  movie: {
    overview: undefined,
    originalLanguage: undefined,
    runtime: undefined,
    budget: undefined,
    revenue: undefined,
    genres: undefined
  }
}

export default connect(mapStateToProps)(MovieDetailsInfo)
