// @flow
import * as React from "react"
import { DragSource } from "react-dnd"
import Paper from "material-ui/Paper"
import { BLOCK } from "../constants"
import _styles from "../styles"
import { blockArray } from "./elements"

// DRAG AND DROP WRAPPER COMPONENT FOR CONTENTS OF LAYOUTS COMPONENT

/**
 * Implements the drag source contract.
 */
const blockSource: Object = {
  beginDrag(props: Object): Object {
    return {
      type: props.element.getType(),
    }
  },
}

/**
 * Specifies the props to inject into the Block Component.
 */
function collect(connect: Object, monitor: Object): Object {
  return {
    connectDragSource: connect.dragSource(),
  }
}

type blockProps = {
  element: React.ComponentType<*>,

  // Injected by React DnD:
  connectDragSource: Function,
}

class _Block extends React.Component<blockProps> {
  render() {
    const { connectDragSource, element } = this.props
    return connectDragSource(
      <div style={_styles.drawerButton.contentButtonWrapper}>
        <Paper zDepth={1} style={_styles.textPrimary}>
          {element.renderThumbnail()}
        </Paper>
      </div>
    )
  }
}

/**
 * React DnD wrapper for Block list element.
 */
const Block: React.ComponentType<*> = DragSource(BLOCK, blockSource, collect)(_Block)

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// LAYOUTS COMPONENT

type buildingBlocksProps = {}

/**
 * Lists all Block elements. Drag and Drop functionality.
 */
class BuildingBlocks extends React.Component<buildingBlocksProps> {
  render() {
    return (
      <div style={_styles.drawerButton.wrapper}>{blockArray.map(el => <Block key={el.getType()} element={el} />)}</div>
    )
  }
}

export default BuildingBlocks
