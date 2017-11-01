// @flow
import React from "react"
import Block, { BlockThumbnail } from "../Block"

/**
 * Button Block element.
 */
class Button extends Block {
  static getType = () => "Button"

  renderThumbnail() {
    return BlockThumbnail("BUTTON", "font_download")
  }

  renderEdit = () => {
    return "Button Edit"
  }
}

export default Button
