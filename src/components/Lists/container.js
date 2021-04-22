import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import {
  getLists as getListsAction,
  removeList as removeListAction,
  createList as createListAction
} from 'Store/features/lists/actions'
import { createListModal } from 'Store/features/modal/constants'
import { getParamsFromUrl } from 'Utils'
import { listsSelector, isListsEmptySelector } from 'Store/features/lists/selectors'
import { setModal as setModalAction } from 'Store/features/modal/actions'
import ListsComponent from './component'

class Lists extends Component {
  componentDidMount() {
    const { page: currentPage } = getParamsFromUrl()
    const { getLists } = this.props
    getLists(currentPage)
  }

  onRemove = (id) => {
    const { removeList } = this.props
    Modal.confirm({
      title: 'Do you want to delete list?',
      onOk() {
        removeList(id)
      }
    })
  }

  onClick = () => {
    const { setModal, createList } = this.props
    setModal({ component: createListModal, action: createList })
  }

  render() {
    const { page: currentPage } = getParamsFromUrl()
    const {
      isLoading, lists, totalResults, isListsEmpty, getLists
    } = this.props

    return (
      <ListsComponent
        currentPage={currentPage}
        lists={lists}
        totalResults={totalResults}
        isLoading={isLoading}
        paginationDisabled={isLoading}
        isListsEmpty={isListsEmpty}
        onPageChange={getLists}
        removeList={this.onRemove}
        onClick={this.onClick}
      />
    )
  }
}

const mapStateToProps = state => ({
  lists: listsSelector(state),
  totalResults: state.lists.totalResults,
  isLoading: state.lists.isLoading,
  isListsEmpty: isListsEmptySelector(state)
})

const mapDispatchToProps = {
  getLists: getListsAction,
  removeList: removeListAction,
  setModal: setModalAction,
  createList: createListAction
}

Lists.propTypes = {
  getLists: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape),
  totalResults: PropTypes.number,
  isListsEmpty: PropTypes.bool.isRequired
}

Lists.defaultProps = {
  lists: [],
  totalResults: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
