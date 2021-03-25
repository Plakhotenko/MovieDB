import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParamsFromUrl } from 'Utils'
import { connect } from 'react-redux'
import { getTrendingMovies as getTrendingMoviesAction, searchMovies as searchMoviesAction } from 'Store/features/dashboard/actions'
import { trendingMoviesSelector, isMoviesEmptySelector } from 'Store/features/dashboard/selectors'
import DashboardComponent from './component'

class Dashboard extends Component {
  componentDidMount() {
    const { query: searchQuery } = getParamsFromUrl()
    const {
      getTrendingMovies, searchMovies, currentPage
    } = this.props
    if (searchQuery) {
      searchMovies({ query: searchQuery, page: currentPage })
    } else {
      getTrendingMovies(currentPage)
    }
  }

  render() {
    const {
      trendingMovies,
      currentPage,
      totalResults,
      getTrendingMovies,
      searchMovies,
      isLoading,
      isMoviesEmpty
    } = this.props

    const onPageChange = (page) => {
      const { query: searchQuery } = getParamsFromUrl()
      if (searchQuery) {
        searchMovies({ query: searchQuery, page })
      } else {
        getTrendingMovies(page)
      }
    }

    return (
      <DashboardComponent
        movies={trendingMovies}
        totalResults={totalResults}
        currentPage={currentPage}
        onPageChange={onPageChange}
        paginationDisabled={isLoading}
        isLoading={isLoading}
        isMoviesEmpty={isMoviesEmpty}
      />
    )
  }
}

const mapStateToProps = state => ({
  trendingMovies: trendingMoviesSelector(state),
  totalResults: state.trendingMovies.totalResults,
  currentPage: state.trendingMovies.currentPage,
  isLoading: state.trendingMovies.isLoading,
  isMoviesEmpty: isMoviesEmptySelector(state)
})

const mapDispatchToProps = {
  getTrendingMovies: getTrendingMoviesAction,
  searchMovies: searchMoviesAction
}

Dashboard.propTypes = {
  getTrendingMovies: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  trendingMovies: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number,
  currentPage: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  isMoviesEmpty: PropTypes.bool.isRequired
}

Dashboard.defaultProps = {
  trendingMovies: [],
  totalResults: 0,
  currentPage: 1
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
