// @flow
import React from "react"
import Block, { BlockThumbnail } from "../Block"

/**
 * Divider Block element.
 */
class Divider extends Block {
  static getType = () => "Divider"

  renderThumbnail() {
    return BlockThumbnail("DIVIDER", "remove")
  }

  renderEdit = () => {
    return "Divider Edit"
  }
}

export default Divider
