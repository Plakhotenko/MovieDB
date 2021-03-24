import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { getSearchMovies as getSearchMoviesAction, getTrendingMovies as getTrendingMoviesAction } from 'Store/features/dashboard/actions'
import { getParamsFromUrl } from 'Utils'
import SearchComponent from './component'

const { query: searchQuery } = getParamsFromUrl()

const searchForSchema = yup.object().shape({
  query: yup.string().required()
})

const Search = ({ getSearchMovies, getTrendingMovies }) => {
  const onSearch = ({ query }) => {
    if (query) {
      getSearchMovies({ query })
    } else {
      getTrendingMovies()
    }
  }
  return (
    <Formik
      initialValues={{
        query: searchQuery
      }}
      validationSchema={searchForSchema}
      onSubmit={onSearch}
    >
      {
        ({ errors }) => (
          <Field
            validateStatus={errors.query && 'error'}
            name="query"
            component={SearchComponent}
          />
        )
      }
    </Formik>
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
