// @flow
import React from "react"
import Paper from "material-ui/Paper"
import _styles from "../styles"
import colors from "../styles/colors"
import { layoutArray } from "./elements"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class Layouts extends React.Component<Props> {
  render() {
    return (
      <div style={_styles.drawerButton.wrapper}>
        {layoutArray.map(el => (
          <Paper zDepth={1} style={_styles.drawerButton.layoutButtonWrapper}>
            {el.renderThumbnail()}
          </Paper>
        ))}
      </div>
    )
  }
}

const styles = {}

export default Layouts
