// @flow
import * as React from "react"
import { connect } from "react-redux"
import { DropTarget } from "react-dnd"
import type { TDProperties } from "../../types"
import { BLOCK } from "../../constants"
import { addBlock } from "../../actions"
import _styles from "../../styles"

// REDUX     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

const mapDispatchToProps = (dispatch: Function): { addBlock: Function } => {
  return {
    addBlock: (blockType, insertAtRowIndex, insertAtCellIndex) =>
      dispatch(addBlock(blockType, insertAtRowIndex, insertAtCellIndex)),
  }
}

// REACT DnD *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

const tableCellTarget = {
  drop(props: Object, monitor: Object, component: React.ComponentType<*>) {
    // Obtain the dragged item
    const item: Object = monitor.getItem()
    props.addBlock(item.type, props.rowIndex, props.index)
  },
}

/**
 * Specifies which props to inject into the Document component.
 */
function collect(connect: Object, monitor: Object) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver({ shallow: true }),
  }
}

// COMPONENT *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

type Props = {
  content: React.ComponentType<*> | Object,
  data: TDProperties,
  index: number,
  flex: number,

  // Injected by React DnD:
  connectDropTarget: Function,
  isOver: boolean,
}

/**
 * View and edit properties for a selected element.
 */
class TableCell extends React.Component<Props, { isOver: boolean }> {
  constructor(props) {
    super(props)

    this.state = {
      isOver: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    // Drag enter
    if (!this.props.isOver && nextProps.isOver) {
      this.setState({ isOver: true })
    }

    // Drag leave
    if (this.props.isOver && !nextProps.isOver) {
      this.setState({ isOver: false })
    }
  }

  render() {
    const { isOver, connectDropTarget, content, flex, data: { align, valign, styleOuter, styleInner } } = this.props
    const isOverStyle: Object = isOver ? _styles.isOverCell : {}

    return connectDropTarget(
      <td style={styleOuter} align={align} valign={valign} colSpan={flex}>
        <div style={Object.assign({}, styleInner, isOverStyle)}>{content}</div>
      </td>
    )
  }
}

export default connect(null, mapDispatchToProps)(DropTarget(BLOCK, tableCellTarget, collect)(TableCell))
