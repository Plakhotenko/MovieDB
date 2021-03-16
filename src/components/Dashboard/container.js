import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTrendingMovies as getTrendingMoviesAction } from 'Store/features/dashboard/actions'
import { trendingMoviesSelector } from 'Store/features/dashboard/selectors'
import DashboardComponent from './component'

class Dashboard extends Component {
  componentDidMount() {
    const { getTrendingMovies, currentPage } = this.props
    getTrendingMovies(currentPage)
  }

  render() {
    const {
      trendingMovies, currentPage, totalResults, getTrendingMovies, isLoading
    } = this.props
    return (
      <DashboardComponent
        movies={trendingMovies}
        totalResults={totalResults}
        currentPage={currentPage}
        getTrendingMovies={getTrendingMovies}
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
  getTrendingMovies: getTrendingMoviesAction
}

Dashboard.propTypes = {
  getTrendingMovies: PropTypes.func.isRequired,
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
