// @flow
import React from "react"
import { connect } from "react-redux"
import type { State } from "../types"

type Props = {
  style: Object,
}

const mapStateToProps = (state: State): Object => {
  return {
    style: state.document.body.style,
  }
}

/**
 * View and edit properties for a selected element.
 */
class Settings extends React.Component<Props> {
  render() {
    return (
      <div>
        <div style={styles.propertyGroup}>
          <label>Background Color: </label>
          <input type="color" defaultValue={this.props.style.backgroundColor} />
        </div>
        <div style={styles.propertyGroup}>
          <label>Text Color: </label>
          <input type="color" defaultValue={this.props.style.color} />
        </div>
        <div style={styles.propertyGroup}>
          <label>Padding: </label>
          <input type="text" defaultValue={this.props.style.padding} />
        </div>
      </div>
    )
  }
}

const styles = {
  propertyGroup: {
    marginBottom: "12px",
  },
}

export default connect(mapStateToProps)(Settings)
