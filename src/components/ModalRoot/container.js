import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MODALS } from 'Store/features/modal/constants'

const ModalRoot = ({ currentModal: { name, action, data } }) => {
  const Modal = MODALS[name]
  return (
    name ? (
      <Modal
        action={action}
        data={data}
      />
    ) : null
  )
}

ModalRoot.propTypes = {
  currentModal: PropTypes.shape({
    name: PropTypes.string,
    action: PropTypes.func,
    data: PropTypes.shape()
  })
}

ModalRoot.defaultProps = {
  currentModal: {
    name: undefined,
    action: undefined,
    data: undefined
  }
}

const mapStateToProps = state => ({
  currentModal: state.modal.currentModal
})

export default connect(mapStateToProps)(ModalRoot)
