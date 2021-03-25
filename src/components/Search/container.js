import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSearchMovies as getSearchMoviesAction, getTrendingMovies as getTrendingMoviesAction } from 'Store/features/dashboard/actions'
import { getParamsFromUrl } from 'Utils'
import SearchComponent from './component'

const { query: searchQuery } = getParamsFromUrl()

const Search = ({ getSearchMovies, getTrendingMovies }) => {
  const onSearch = ({ query }) => {
    if (query) {
      getSearchMovies({ query })
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
  getSearchMovies: PropTypes.func.isRequired,
  getTrendingMovies: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getSearchMovies: getSearchMoviesAction,
  getTrendingMovies: getTrendingMoviesAction
}

export default connect(null, mapDispatchToProps)(Search)
