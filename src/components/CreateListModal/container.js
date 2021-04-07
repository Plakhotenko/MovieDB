import React, { Component } from 'react'
import { hideModal as hideModalAction } from 'Store/features/modal/actions'
import { createList as createListAction } from 'Store/features/lists/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreateListModalComponent from './component'

class CreateListModal extends Component {
  onSubmit(data) {
    const { hideModal, createList } = this.props
    hideModal()
    createList(data)
  }

  render() {
    const { hideModal } = this.props
    return (
      <CreateListModalComponent
        onSubmit={this.onSubmit}
        hideModal={hideModal}
      />
    )
  }
}

const mapDispatchToProps = {
  hideModal: hideModalAction,
  createList: createListAction
}

CreateListModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(CreateListModal)
