import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MODALS } from 'Store/features/modal/constants'

const ModalRoot = ({ currentModal }) => {
  const Modal = MODALS[currentModal]
  return (
    currentModal ? <Modal /> : null
  )
}

ModalRoot.propTypes = {
  currentModal: PropTypes.string
}

ModalRoot.defaultProps = {
  currentModal: undefined
}

const mapStateToProps = state => ({
  currentModal: state.modal.currentModal
})

export default connect(mapStateToProps)(ModalRoot)
