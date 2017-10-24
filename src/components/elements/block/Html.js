// @flow
import React from "react"
import _styles from "../../../styles"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class HTML extends React.Component<Props> {
  static getType = () => "Html"

  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div>
          <i style={_styles.thumbnailStyles.icon} className="material-icons">
            &#xE86F;
          </i>
        </div>
        HTML
      </div>
    )
  }

  render() {
    return <div>Text</div>
  }
}

export default HTML
