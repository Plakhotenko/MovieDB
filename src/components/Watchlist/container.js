import React, { Component } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getParamsFromUrl } from 'Utils/'
import {
  getWatchlistMovies as getWatchlistMoviesAction,
  removeWatchlistMovie as removeWatchlistMovieAction
} from 'Store/features/watchlist/actions'
import { watchlistMoviesSelector, isMoviesEmptySelector } from 'Store/features/watchlist/selectors'
import WatchlistComponent from './component'

class Watchlist extends Component {
  componentDidMount() {
    const { page: currentPage } = getParamsFromUrl()
    const { getWatchlistMovies } = this.props
    getWatchlistMovies(currentPage)
  }

  showDeleteMovieModal = (id) => {
    const { removeWatchlistMovie } = this.props
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        removeWatchlistMovie(id)
      }
    })
  }

  render() {
    const { page: currentPage } = getParamsFromUrl()
    const {
      watchlistMovies, totalResults, getWatchlistMovies, isLoading, isMoviesEmpty
    } = this.props

    return (
      <WatchlistComponent
        movies={watchlistMovies}
        totalResults={totalResults}
        currentPage={currentPage}
        onPageChange={getWatchlistMovies}
        paginationDisabled={isLoading}
        isLoading={isLoading}
        isMoviesEmpty={isMoviesEmpty}
        onClick={this.showDeleteMovieModal}
      />
    )
  }
}

const mapStateToProps = state => ({
  watchlistMovies: watchlistMoviesSelector(state),
  totalResults: state.watchlist.totalResults,
  isLoading: state.watchlist.isLoading,
  isMoviesEmpty: isMoviesEmptySelector(state)
})

const mapDispatchToProps = {
  getWatchlistMovies: getWatchlistMoviesAction,
  removeWatchlistMovie: removeWatchlistMovieAction
}

Watchlist.propTypes = {
  getWatchlistMovies: PropTypes.func.isRequired,
  removeWatchlistMovie: PropTypes.func.isRequired,
  watchlistMovies: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  isMoviesEmpty: PropTypes.bool.isRequired
}

Watchlist.defaultProps = {
  watchlistMovies: [],
  totalResults: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist)
