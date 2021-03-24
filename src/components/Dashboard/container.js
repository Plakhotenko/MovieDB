import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getParamsFromUrl } from 'Utils'
import { connect } from 'react-redux'
import { getTrendingMovies as getTrendingMoviesAction, setSearchLoading as setSearchLoadingAction } from 'Store/features/dashboard/actions'
import { trendingMoviesSelector } from 'Store/features/dashboard/selectors'
import DashboardComponent from './component'

const { query: searchQuery } = getParamsFromUrl()

class Dashboard extends Component {
  componentDidMount() {
    const {
      getTrendingMovies, setSearchLoading, currentPage
    } = this.props
    if (searchQuery) {
      setSearchLoading(searchQuery, null, currentPage)
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
      setSearchLoading,
      isLoading
    } = this.props

    const onPageChange = (page) => {
      if (searchQuery) {
        setSearchLoading(searchQuery, null, page)
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
      />
    )
  }
}

const mapStateToProps = state => ({
  trendingMovies: trendingMoviesSelector(state),
  totalResults: state.trendingMovies.totalResults,
  currentPage: state.trendingMovies.currentPage,
  isLoading: state.trendingMovies.isLoading
})

const mapDispatchToProps = {
  getTrendingMovies: getTrendingMoviesAction,
  setSearchLoading: setSearchLoadingAction
}

Dashboard.propTypes = {
  getTrendingMovies: PropTypes.func.isRequired,
  setSearchLoading: PropTypes.func.isRequired,
  trendingMovies: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number,
  currentPage: PropTypes.number,
  isLoading: PropTypes.bool.isRequired
}

Dashboard.defaultProps = {
  trendingMovies: [],
  totalResults: 0,
  currentPage: 1
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
