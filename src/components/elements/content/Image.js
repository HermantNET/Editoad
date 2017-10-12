// @flow
import React from "react"
import _styles from "../../../styles"
import colors from "../../../styles/colors"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class Image extends React.Component<Props> {
  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div>
          <i style={_styles.thumbnailStyles.icon} className="material-icons">
            &#xE251;
          </i>
        </div>
        IMAGE
      </div>
    )
  }

  render() {
    return <div>Text</div>
  }
}

const styles = {}

export default Image
