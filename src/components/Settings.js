// @flow
import React from "react"
import { connect } from "react-redux"
import _styles from "../styles"
import colors from "../styles/colors"

type Props = {
  style: Object,
}

const mapStateToProps = (state: Object): Object => {
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
          <input type="color" value={this.props.style.backgroundColor} />
        </div>
        <div style={styles.propertyGroup}>
          <label>Text Color: </label>
          <input type="color" value={this.props.style.color} />
        </div>
        <div style={styles.propertyGroup}>
          <label>Padding: </label>
          <input type="text" value={this.props.style.padding} />
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
