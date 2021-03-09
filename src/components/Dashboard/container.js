import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTrendingMovies } from '../../store/features/dashboard/actions'
import DashboardComponent from './component'

class Dashboard extends Component {
  componentDidMount() {
    const { fetchTrendingMoviesHandler } = this.props
    fetchTrendingMoviesHandler()
  }

  render() {
    const { trendingMovies, totalResults, fetchTrendingMoviesHandler } = this.props
    return (
      <DashboardComponent
        movies={trendingMovies}
        totalResults={totalResults}
        fetchTrendingMoviesHandler={fetchTrendingMoviesHandler}
      />
    )
  }
}

const mapStateToProps = state => ({
  trendingMovies: state.trendingMovies.movies,
  totalResults: state.trendingMovies.totalResults
})

const mapDispatchToProps = {
  fetchTrendingMoviesHandler: fetchTrendingMovies
}

Dashboard.propTypes = {
  fetchTrendingMoviesHandler: PropTypes.func.isRequired,
  trendingMovies: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number
}

Dashboard.defaultProps = {
  trendingMovies: [],
  totalResults: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
