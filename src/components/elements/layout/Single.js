// @flow
import React from "react"
import _styles, { block } from "../../../styles"
import colors from "../../../styles/colors"

type Props = {
  content: Array<*>,
}

/**
 * View and edit properties for a selected element.
 */
class Single extends React.Component<Props> {
  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div style={_styles.flex}>
          <div style={block(1)} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <tr>
        <td align="center" valign="top" bgcolor="">
          {this.props.content[0]}
        </td>
      </tr>
    )
  }
}

const styles = {}

export default Single
