// @flow
import React from "react"
import { connect } from "react-redux"
import { editBodyStyle } from "../actions"
import type { State } from "../types"
import _styles from "../styles"

const mapStateToProps = (state: State): Object => {
  return {
    style: state.document.body.style,
  }
}

const mapDispatchToProps = (dispatch: Function): { [string]: Function } => {
  return {
    editBodyStyle: style => dispatch(editBodyStyle(style)),
  }
}

type Props = {
  style: Object,
  editBodyStyle: Function,
}

/**
 * View and edit properties for a selected element.
 */
class Settings extends React.Component<Props, *> {
  constructor(props: Props) {
    super(props)

    this.state = {
      style: {},
    }
  }

  // styleInner handler
  bodyStyleChange = e => {
    const { editBodyStyle } = this.props
    let timeout
    this.setState(
      {
        style: Object.assign({}, this.state.style, { [e.target.name]: e.target.value }),
      },
      () => {
        timeout && timeout.clearTimeout()
        timeout = setTimeout(() => {
          editBodyStyle(this.state.style)
        }, 100)
      }
    )
  }

  render() {
    return (
      <div>
        <div style={_styles.propertyGroup}>
          <label>Background Color: </label>
          <input
            type="color"
            name="backgroundColor"
            onChange={this.bodyStyleChange}
            defaultValue={this.props.style.backgroundColor}
          />
        </div>
        <div style={_styles.propertyGroup}>
          <label>Text Color: </label>
          <input type="color" name="color" onChange={this.bodyStyleChange} defaultValue={this.props.style.color} />
        </div>
        <div style={_styles.propertyGroup}>
          <label>Padding: </label>
          <input type="text" name="padding" onChange={this.bodyStyleChange} defaultValue={this.props.style.padding} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
