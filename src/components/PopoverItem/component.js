import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const PopoverItemComponent = ({
  name, onClick
}) => (
  <div>
    <Button
      onClick={onClick}
      type="link"
    >
      {name}
    </Button>
  </div>
)

PopoverItemComponent.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

PopoverItemComponent.defaultProps = {
  name: undefined
}

export default PopoverItemComponent
