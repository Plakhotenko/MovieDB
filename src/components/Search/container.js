import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSearchLoading as setSearchLoadingAction, getTrendingMovies as getTrendingMoviesAction } from 'Store/features/dashboard/actions'
import SearchComponent from './component'

const Search = ({ setSearchLoading, getTrendingMovies, isSearchLoading }) => {
  const onSearch = (query) => {
    if (query) {
      setSearchLoading(query)
    } else {
      getTrendingMovies()
    }
  }
  return (
    <SearchComponent
      onSearch={onSearch}
      isSearchLoading={isSearchLoading}
    />
  )
}

Search.propTypes = {
  setSearchLoading: PropTypes.func.isRequired,
  getTrendingMovies: PropTypes.func.isRequired,
  isSearchLoading: PropTypes.bool
}

Search.defaultProps = {
  isSearchLoading: false
}

const mapStateToProps = state => ({
  isSearchLoading: state.trendingMovies.isSearchLoading
})

const mapDispatchToProps = {
  setSearchLoading: setSearchLoadingAction,
  getTrendingMovies: getTrendingMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
