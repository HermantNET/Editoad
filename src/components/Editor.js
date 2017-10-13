// @flow
import React from "react"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import colors from "../styles/colors"
import Document from "./Document"

type Props = {
  size: string,
}

function mapStateToProps(state: Object): Object {
  return {
    size: state.editor.size,
  }
}

/**
 * View and modify the document.
 */
class Editor extends React.Component<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <Paper style={Object.assign({}, styles.document, { width: this.props.size })}>
          {/* TODO, make Document component */}
          <Document />
        </Paper>
      </div>
    )
  }
}

const styles: { [string]: Object } = {
  wrapper: {
    flex: 1,
    paddingTop: "12px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: colors.dim,
  },
  document: {
    transition: "all 0.3s ease-in-out",
  },
  hidden: {
    display: "none",
  },
}

export default connect(mapStateToProps)(Editor)
