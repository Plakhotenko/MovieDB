import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import PersonList from '../PersonList'
import MovieDetailsCarousel from '../MovieDetailsCarousel'
import MovieDetailsInfo from '../MovieDetailsInfo'
import Loader from '../Loader'
import Header from '../Header'
import MovieDetailsHeader from '../MovieDetailsHeader'

const MovieDetailsComponent = ({
  isLoading,
  movieId,
  backdrops,
  cast,
  crew
}) => (
  <Layout>
    <Header />
    {isLoading ? (
      <div className="top-margin">
        <Loader />
      </div>
    ) : (
      <Layout.Content>
        <MovieDetailsCarousel
          images={backdrops}
        />
        <div className="top-margin">
          <MovieDetailsHeader movieId={movieId} />
          <MovieDetailsInfo movieId={movieId} />
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
  </Layout>
)

MovieDetailsComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  backdrops: PropTypes.arrayOf(PropTypes.shape()),
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.arrayOf(PropTypes.shape()),
  movieId: PropTypes.string.isRequired
}

MovieDetailsComponent.defaultProps = {
  backdrops: undefined,
  cast: undefined,
  crew: undefined
}

export default MovieDetailsComponent
