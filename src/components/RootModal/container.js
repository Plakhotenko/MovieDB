import React from 'react'
import { connect } from 'react-redux'
import { MODALS } from 'Store/features/modal/constants'
import PropTypes from 'prop-types'
import RootModalComponent from './component'

const RootModal = ({ currentModal }) => (
  currentModal ? <RootModalComponent component={MODALS[currentModal]} /> : null
)

RootModal.propTypes = {
  currentModal: PropTypes.string
}

RootModal.defaultProps = {
  currentModal: undefined
}

const mapStateToProps = state => ({
  currentModal: state.modal.currentModal
})

export default connect(mapStateToProps)(RootModal)
