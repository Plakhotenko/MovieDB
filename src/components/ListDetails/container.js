import React, { Component } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getListDetailsMovies as getListDetailsMoviesAction,
  removeListDetailsMovie as removeListDetailsMovieAction
} from 'Store/features/listDetails/actions'
import { listDetailsMoviesSelector, isMoviesEmptySelector } from 'Store/features/listDetails/selectors'
import ListDetailsComponent from './component'

class ListDetails extends Component {
  componentDidMount() {
    const { getListDetailsMovies, match: { params: { listId } } } = this.props
    getListDetailsMovies(listId)
  }

  onShowDeleteModal = (id) => {
    const { removeListDetailsMovie, name, match: { params: { listId } } } = this.props
    Modal.confirm({
      title: `Do you want to delete movie from ${name}?`,
      onOk() {
        removeListDetailsMovie({ listId, movieId: id })
      }
    })
  }

  render() {
    const {
      listDetailsMovies, isLoading, isMoviesEmpty, name
    } = this.props
    return (
      <ListDetailsComponent
        movies={listDetailsMovies}
        isLoading={isLoading}
        isMoviesEmpty={isMoviesEmpty}
        name={name}
        onClick={this.onShowDeleteModal}
      />
    )
  }
}

const mapStateToProps = state => ({
  listDetailsMovies: listDetailsMoviesSelector(state),
  name: state.listDetails.name,
  isLoading: state.listDetails.isLoading,
  isMoviesEmpty: isMoviesEmptySelector(state)
})

const mapDispatchToProps = {
  getListDetailsMovies: getListDetailsMoviesAction,
  removeListDetailsMovie: removeListDetailsMovieAction
}

ListDetails.propTypes = {
  getListDetailsMovies: PropTypes.func.isRequired,
  removeListDetailsMovie: PropTypes.func.isRequired,
  listDetailsMovies: PropTypes.arrayOf(PropTypes.shape),
  isLoading: PropTypes.bool.isRequired,
  isMoviesEmpty: PropTypes.bool.isRequired,
  name: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      listId: PropTypes.string.isRequired
    })
  }).isRequired
}

ListDetails.defaultProps = {
  listDetailsMovies: [],
  name: undefined
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails)
