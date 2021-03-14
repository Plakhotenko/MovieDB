import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTrendingMovies } from '../../store/features/dashboard/actions'
import DashboardComponent from './component'
import { trendingMoviesSelector } from '../../store/features/dashboard/selectors'

class Dashboard extends Component {
  componentDidMount() {
    const { getTrendingMoviesHandler, currentPage } = this.props
    getTrendingMoviesHandler(currentPage)
  }

  render() {
    const {
      trendingMovies, currentPage, totalResults, getTrendingMoviesHandler
    } = this.props
    return (
      <DashboardComponent
        movies={trendingMovies}
        totalResults={totalResults}
        currentPage={currentPage}
        getTrendingMoviesHandler={getTrendingMoviesHandler}
        paginationDisabled={!trendingMovies.length}
      />
    )
  }
}

const mapStateToProps = state => ({
  trendingMovies: trendingMoviesSelector(state),
  totalResults: state.trendingMovies.totalResults,
  currentPage: state.trendingMovies.currentPage
})

const mapDispatchToProps = {
  getTrendingMoviesHandler: getTrendingMovies
}

Dashboard.propTypes = {
  getTrendingMoviesHandler: PropTypes.func.isRequired,
  trendingMovies: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number,
  currentPage: PropTypes.number
}

Dashboard.defaultProps = {
  trendingMovies: [],
  totalResults: 0,
  currentPage: 1
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
