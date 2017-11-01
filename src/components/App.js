// @flow
import React from "react"
import { connect } from "react-redux"
import type { State } from "../types"
import HTML5Backend from "react-dnd-html5-backend"
import { DragDropContext } from "react-dnd"
import Paper from "material-ui/Paper"
import colors from "../styles/colors"
import ActionBar from "./ActionBar"
import Drawer from "./Drawer"
import Editor from "./Editor"

// REDUX

const mapStateToProps = (state: State) => {
  return {
    bgColor: state.document.body.style.backgroundColor,
  }
}

// COMPONENT

type Props = {
  bgColor: string,
}

/**
 * Container Component for the application
 */
class App extends React.Component<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <ActionBar />
          <Editor />
        </div>
        <Paper style={styles.right} zDepth={1}>
          <Drawer />
        </Paper>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: "flex",
    height: "100vh",
    boxSizing: "border-box",
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  right: {
    width: "300px",
    backgroundColor: colors.primary,
    zIndex: 1,
  },
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App))
