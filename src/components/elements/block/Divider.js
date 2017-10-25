// @flow
import React from "react"
import _styles from "../../../styles"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class Divider extends React.Component<Props> {
  static getType = () => "Divider"

  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div>
          <i style={_styles.thumbnailStyles.icon} className="material-icons">
            &#xE15B;
          </i>
        </div>
        DIVIDER
      </div>
    )
  }

  render() {
    return <div>Divider</div>
  }
}

export default Divider
