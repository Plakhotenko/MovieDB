import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MODALS } from 'Store/features/modal/constants'

const ModalRoot = ({ currentModal: { component, action, data } }) => {
  const Modal = MODALS[component]
  return (
    component ? (
      <Modal
        action={action}
        data={data}
      />
    ) : null
  )
}

ModalRoot.propTypes = {
  currentModal: PropTypes.shape({
    component: PropTypes.string,
    action: PropTypes.func,
    data: PropTypes.shape()
  })
}

ModalRoot.defaultProps = {
  currentModal: {
    component: undefined,
    action: undefined,
    data: undefined
  }
}

const mapStateToProps = state => ({
  currentModal: state.modal.currentModal
})

export default connect(mapStateToProps)(ModalRoot)
