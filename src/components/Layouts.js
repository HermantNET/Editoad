// @flow
import * as React from "react"
import { DragSource } from "react-dnd"
import Paper from "material-ui/Paper"
import { LAYOUT } from "../constants"
import _styles from "../styles"
import { layoutArray } from "./elements"

// DRAG AND DROP WRAPPER COMPONENT FOR CONTENTS OF LAYOUTS COMPONENT

/**
 * Implements the drag source contract.
 */
const layoutSource: Object = {
  beginDrag(props: Object): Object {
    return {
      type: props.element.getType(),
    }
  },
}

/**
 * Specifies the props to inject into your component.
 */
function collect(connect: Object, monitor: Object): Object {
  return {
    connectDragSource: connect.dragSource(),
  }
}

type LayoutProps = {
  element: React.ComponentType<*>,

  // Injected by React DnD:
  connectDragSource: Function,
}

class _Layout extends React.Component<LayoutProps> {
  render() {
    const { connectDragSource, element } = this.props
    return connectDragSource(
      <div style={_styles.drawerButton.layoutButtonWrapper}>
        <Paper zDepth={1}>{element.renderThumbnail()}</Paper>
      </div>
    )
  }
}

const Layout: React.ComponentType<*> = DragSource(LAYOUT, layoutSource, collect)(_Layout)

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// LAYOUTS COMPONENT

type LayoutsProps = {}

/**
 * List of ready-made layouts/rows users can use to build to templates. Drag and drop functionality.
 */
class Layouts extends React.Component<LayoutsProps> {
  render() {
    return (
      <div style={_styles.drawerButton.wrapper}>
        {layoutArray.map(el => <Layout key={el.getType()} element={el} />)}
      </div>
    )
  }
}

export default Layouts
