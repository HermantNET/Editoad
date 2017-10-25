// @flow
import React from "react"
import { connect } from "react-redux"
import type { State } from "../types"
import Paper from "material-ui/Paper"
import colors from "../styles/colors"
import { editSelectedElement } from "../actions"
import Document from "./Document"

type Props = {
  size: number,
  editSelectedElement: Function,
}

const mapStateToProps = (state: State): Object => {
  return {
    size: state.editor.size,
  }
}

const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    editSelectedElement: () => dispatch(editSelectedElement("none")),
  }
}

/**
 * View and modify the document.
 */
class Editor extends React.Component<Props> {
  componentDidMount() {
    const that = this
    let resizeTimer
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(function() {
        that.forceUpdate()
      }, 250)
    })
  }

  calcWidth = (): { width: string, scale: number } => {
    const { size } = this.props
    let width = 1
    let val = { width: `${size}px`, scale: 1 }

    if (this.element) {
      if ("getBoundingClientRect" in this.element) {
        width = this.element.getBoundingClientRect().width
      }
    }

    if (size === -1) {
      val.width = "98%"
    } else if (size >= width * 0.98) {
      val.width = width * 0.98
      // val.scale = width / size
    }

    return val
  }

  render() {
    const { editSelectedElement } = this.props
    const { width, scale } = this.calcWidth()
    return (
      <div style={styles.wrapper} ref={element => (this.element = element)} onTouchTap={editSelectedElement}>
        <Paper style={Object.assign({}, styles.document, { width /* transform: `scale(${scale})` */ })}>
          <Document />
        </Paper>
      </div>
    )
  }
}

const styles: { [string]: Object } = {
  wrapper: {
    flex: "1",
    display: "flex",
    paddingTop: "12px",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: colors.dim,
    overflowX: "hidden",
    overflowY: "scroll",
  },
  document: {
    float: "left",
    transition: "all 0.3s ease-in-out",
  },
  hidden: {
    display: "none",
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
