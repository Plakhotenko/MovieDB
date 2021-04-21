import React, { Component } from 'react'
import { hideModal as hideModalAction } from 'Store/features/modal/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CreateListModalComponent from './component'

class CreateListModal extends Component {
  onSubmit = ({ name, description }) => {
    const { hideModal, action, data: { movieId } } = this.props
    hideModal()
    action({ name, description, movieId })
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
  action: PropTypes.func.isRequired,
  data: PropTypes.shape({
    movieId: PropTypes.string
  })
}

CreateListModal.defaultProps = {
  data: {
    movieId: undefined
  }
}

export default connect(null, mapDispatchToProps)(CreateListModal)
