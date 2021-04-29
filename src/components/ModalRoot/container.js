import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MODALS } from 'Store/features/modal/constants'

const ModalRoot = ({ currentModal: { name, props } }) => {
  const Modal = MODALS[name]
  return (
    name ? (
      <Modal
        props={props}
      />
    ) : null
  )
}

ModalRoot.propTypes = {
  currentModal: PropTypes.shape({
    name: PropTypes.string,
    onSubmit: PropTypes.func,
    props: PropTypes.shape(),
    data: PropTypes.shape()
  })
}

ModalRoot.defaultProps = {
  currentModal: {}
}

const mapStateToProps = state => ({
  currentModal: state.modal.currentModal
})

export default connect(mapStateToProps)(ModalRoot)
