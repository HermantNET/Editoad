// @flow
import React from "react"
import _styles, { block } from "../../../styles"
import colors from "../../../styles/colors"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class TwoOne extends React.Component<Props> {
  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div style={_styles.flex}>
          <div style={block(2)} />
          <div style={block(1)} />
        </div>
      </div>
    )
  }

  render() {
    return <div>Text</div>
  }
}

const styles = {}

export default TwoOne
