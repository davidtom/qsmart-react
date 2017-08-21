import React from 'react'
import PropTypes from 'prop-types'


export default function (RenderedComponent, inheritedProps) {
  return class extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentDidMount() {
      if (!localStorage.getItem('jwt')) {
        this.context.router.history.push('/')
      }
    }

    render() {
      return (
        <RenderedComponent {...inheritedProps} />
      )
    }
  }
}
