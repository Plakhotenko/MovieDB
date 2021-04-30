import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MODALS } from 'Store/features/modal/constants'

const ModalRoot = ({ currentModal: { name, props } }) => {
  const Modal = MODALS[name]
  return (
    name ? (
      <Modal
        {...props}
      />
    ) : null
  )
}

ModalRoot.propTypes = {
  currentModal: PropTypes.shape({
    name: PropTypes.string,
    props: PropTypes.shape()
  })
}

ModalRoot.defaultProps = {
  currentModal: undefined
}

const mapStateToProps = state => ({
  currentModal: state.modal.currentModal
})

export default connect(mapStateToProps)(ModalRoot)
