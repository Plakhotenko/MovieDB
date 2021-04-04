import React from 'react'
import { setModal as setModalAction } from 'Store/features/modal/actions'
import { createList as createListAction } from 'Store/features/lists/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreateListModalComponent from './component'

const CreateListModal = ({ setModal, createList }) => (
  <CreateListModalComponent
    setModal={setModal}
    createList={createList}
  />
)

const mapDispatchToProps = {
  setModal: setModalAction,
  createList: createListAction
}

CreateListModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(CreateListModal)
