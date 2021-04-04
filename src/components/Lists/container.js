import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { getLists as getListsAction, removeList as removeListAction } from 'Store/features/lists/actions'
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

  render() {
    const { page: currentPage } = getParamsFromUrl()
    const {
      isLoading, lists, totalResults, isListsEmpty, getLists, removeList, setModal
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
        removeList={removeList}
        setModal={setModal}
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
  setModal: setModalAction
}

Lists.propTypes = {
  getLists: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
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
