// @flow
import React from "react"
import Paper from "material-ui/Paper"
import _styles from "../styles"
import colors from "../styles/colors"
import { contentArray } from "./elements"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class BuildingBlocks extends React.Component<Props> {
  render() {
    return (
      <div style={_styles.drawerButton.wrapper}>
        {contentArray.map(el => (
          <Paper zDepth={1} style={_styles.drawerButton.contentButtonWrapper}>
            {el.renderThumbnail()}
          </Paper>
        ))}
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  elementWrapper: {
    width: "48%",
    borderRadius: "4px",
    border: "1px solid white",
    marginBottom: "12px",
  },
}

export default BuildingBlocks
