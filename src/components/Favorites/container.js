import React, { Component } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getParamsFromUrl } from 'Utils/'
import {
  getFavoriteMovies as getFavoriteMoviesAction,
  removeFavoriteMovie as removeFavoriteMovieAction
} from 'Store/features/favorites/actions'
import { favoriteMoviesSelector, isMoviesEmptySelector } from 'Store/features/favorites/selectors'
import FavoritesComponent from './component'

class Favorites extends Component {
  componentDidMount() {
    const { page: currentPage } = getParamsFromUrl()
    const { getFavoriteMovies } = this.props
    getFavoriteMovies(currentPage)
  }

  onShowDeleteModal = (id) => {
    const { removeFavoriteMovie } = this.props
    Modal.confirm({
      title: 'Do you want to delete movie from favorites?',
      onOk() {
        removeFavoriteMovie(id)
      }
    })
  }

  render() {
    const { page: currentPage } = getParamsFromUrl()
    const {
      favoriteMovies, totalResults, getFavoriteMovies, isLoading, isMoviesEmpty
    } = this.props

    return (
      <FavoritesComponent
        movies={favoriteMovies}
        totalResults={totalResults}
        currentPage={currentPage}
        onPageChange={getFavoriteMovies}
        paginationDisabled={isLoading}
        isLoading={isLoading}
        isMoviesEmpty={isMoviesEmpty}
        onClick={this.onShowDeleteModal}
      />
    )
  }
}

const mapStateToProps = state => ({
  favoriteMovies: favoriteMoviesSelector(state),
  totalResults: state.favorites.totalResults,
  isLoading: state.favorites.isLoading,
  isMoviesEmpty: isMoviesEmptySelector(state)
})

const mapDispatchToProps = {
  getFavoriteMovies: getFavoriteMoviesAction,
  removeFavoriteMovie: removeFavoriteMovieAction
}

Favorites.propTypes = {
  getFavoriteMovies: PropTypes.func.isRequired,
  removeFavoriteMovie: PropTypes.func.isRequired,
  favoriteMovies: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  isMoviesEmpty: PropTypes.bool.isRequired
}

Favorites.defaultProps = {
  favoriteMovies: [],
  totalResults: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
