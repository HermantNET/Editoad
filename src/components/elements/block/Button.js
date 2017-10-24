// @flow
import React from "react"
import _styles from "../../../styles"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class Button extends React.Component<Props> {
  static getType = () => "Button"

  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div>
          <i style={_styles.thumbnailStyles.icon} className="material-icons">
            &#xE167;
          </i>
        </div>
        BUTTON
      </div>
    )
  }

  render() {
    return <div>Text</div>
  }
}

export default Button
