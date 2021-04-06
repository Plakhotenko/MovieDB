import React from 'react'
import { hideModal as hideModalAction } from 'Store/features/modal/actions'
import { createList as createListAction } from 'Store/features/lists/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreateListModalComponent from './component'

const CreateListModal = ({ hideModal, createList }) => (
  <CreateListModalComponent
    hideModal={hideModal}
    createList={createList}
  />
)

const mapDispatchToProps = {
  hideModal: hideModalAction,
  createList: createListAction
}

CreateListModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(CreateListModal)
