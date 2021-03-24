import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { setSearchLoading as setSearchLoadingAction, getTrendingMovies as getTrendingMoviesAction } from 'Store/features/dashboard/actions'
import { getParamsFromUrl } from 'Utils'
import SearchComponent from './component'

const { query: searchQuery } = getParamsFromUrl()

const searchForSchema = yup.object().shape({
  query: yup.string().required()
})

const Search = ({ setSearchLoading, getTrendingMovies }) => {
  const onSearch = ({ query }) => {
    if (query) {
      setSearchLoading(query)
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
  setSearchLoading: PropTypes.func.isRequired,
  getTrendingMovies: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setSearchLoading: setSearchLoadingAction,
  getTrendingMovies: getTrendingMoviesAction
}

export default connect(null, mapDispatchToProps)(Search)
