import React from 'react'
import PropTypes from 'prop-types'

const RootModalComponent = ({ component: Component }) => <Component />

RootModalComponent.propTypes = {
  component: PropTypes.elementType
}

RootModalComponent.defaultProps = {
  component: undefined
}

export default RootModalComponent
