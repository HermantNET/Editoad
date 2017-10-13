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
class Double extends React.Component<Props> {
  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div style={_styles.flex}>
          <div style={block(1)} />
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
        <td align="center" valign="top" bgcolor="">
          {this.props.content[1]}
        </td>
      </tr>
    )
  }
}

const styles = {}

export default Double
