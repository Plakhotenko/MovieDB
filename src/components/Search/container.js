import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchMovies as searchMoviesAction, getTrendingMovies as getTrendingMoviesAction } from 'Store/features/dashboard/actions'
import { getParamsFromUrl } from 'Utils'
import SearchComponent from './component'

const { query: searchQuery } = getParamsFromUrl()

const Search = ({ searchMovies, getTrendingMovies }) => {
  const onSearch = ({ query }) => {
    if (query) {
      searchMovies({ query })
    } else {
      getTrendingMovies()
    }
  }
  return (
    <SearchComponent
      onSearch={onSearch}
      searchQuery={searchQuery}
    />
  )
}

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  getTrendingMovies: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  searchMovies: searchMoviesAction,
  getTrendingMovies: getTrendingMoviesAction
}

export default connect(null, mapDispatchToProps)(Search)
