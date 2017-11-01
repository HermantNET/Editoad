// @flow
import React from "react"
import Block, { BlockThumbnail } from "../Block"

/**
 * Html block element.
 */
class Html extends Block {
  static getType = () => "Html"

  renderThumbnail() {
    return BlockThumbnail("HTML", "code")
  }

  renderEdit = () => {
    return "Html Edit"
  }
}

export default Html
