import React, { Component } from 'react'
import { hideModal as hideModalAction } from 'Store/features/modal/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreateListModalComponent from './component'

class CreateListModal extends Component {
  onSubmit = ({ name, description }) => {
    const { hideModal, props: { onSubmit, movieId } } = this.props
    hideModal()
    onSubmit({ name, description, movieId })
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
  hideModal: hideModalAction
}

CreateListModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  props: PropTypes.shape({
    movieId: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  })
}

CreateListModal.defaultProps = {
  props: undefined
}

export default connect(null, mapDispatchToProps)(CreateListModal)
