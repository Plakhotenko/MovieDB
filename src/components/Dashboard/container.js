import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTrendingMovies } from 'Store/features/dashboard/actions'
import { trendingMoviesSelector } from 'Store/features/dashboard/selectors'
import DashboardComponent from './component'

class Dashboard extends Component {
  componentDidMount() {
    const { getTrendingMoviesHandler, currentPage } = this.props
    getTrendingMoviesHandler(currentPage)
  }

  render() {
    const {
      trendingMovies, currentPage, totalResults, getTrendingMoviesHandler, isLoading
    } = this.props
    return (
      <DashboardComponent
        movies={trendingMovies}
        totalResults={totalResults}
        currentPage={currentPage}
        getTrendingMoviesHandler={getTrendingMoviesHandler}
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
  getTrendingMoviesHandler: getTrendingMovies
}

Dashboard.propTypes = {
  getTrendingMoviesHandler: PropTypes.func.isRequired,
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
