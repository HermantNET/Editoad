// @flow
import * as React from "react"
import { connect } from "react-redux"
import { DragLayer, DragSource, DropTarget } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"
import type { TDProperties } from "../../types"
import { BLOCK } from "../../constants"
import { addBlock, editSelectedElement, moveCell, deleteCell } from "../../actions"
import { blockElements } from "./index"
import _styles from "../../styles"
import colors from "../../styles/colors"

// REDUX     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const mapDispatchToProps = (dispatch: Function): { addBlock: Function } => {
  return {
    addBlock: (blockType, insertAtRowIndex, insertAtCellIndex) =>
      dispatch(addBlock(blockType, insertAtRowIndex, insertAtCellIndex)),
    editSelectedElement: (element_id, rowIndex, cellIndex) =>
      dispatch(editSelectedElement(element_id, rowIndex, cellIndex)),
    moveCell: (cellRowIndex, cellIndex, targetRowIndex, targetCellIndex) =>
      dispatch(moveCell(cellRowIndex, cellIndex, targetRowIndex, targetCellIndex)),
    deleteCell: (cellRowIndex, cellIndex) => dispatch(deleteCell(cellRowIndex, cellIndex)),
  }
}

// REACT DnD *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

const tableCellTarget = {
  drop(props: Object, monitor: Object, component: React.ComponentType<*>) {
    // Obtain the dragged item
    const item: Object = monitor.getItem()
    if (item.move) {
      props.moveCell(item.cellRowIndex, item.cellIndex, props.rowIndex, props.index)
    } else {
      props.addBlock(item.type, props.rowIndex, props.index)
    }
  },
}

/**
 * Specifies which props to inject into the Document component.
 */
function collectTarget(connect: Object, monitor: Object) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver({ shallow: true }),
  }
}

/**
 * Implements the drag source contract.
 */
const tableCellSource: Object = {
  beginDrag(props: Object): Object {
    return {
      move: true,
      type: props.data.type,
      cellIndex: props.index,
      cellRowIndex: props.rowIndex,
    }
  },
}

/**
 * Specifies the props to inject into your component.
 */
function collectSource(connect: Object, monitor: Object): Object {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

// COMPONENT *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

type Props = {
  content: React.ComponentType<*> | Object,
  data: TDProperties,
  index: number,
  rowIndex: number,
  flex: number,
  addBlock: Function,
  editSelectedElement: Function,
  moveCell: Function,
  deleteCell: Function,

  // Injected by React DnD:
  connectDropTarget: Function,
  connectDragSource: Function,
  isOver: boolean,
  isDragging: boolean,
}

/**
 * View and edit properties for a selected element.
 */
class TableCell extends React.Component<Props, { isOver: boolean, mouseOver: boolean }> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isOver: false,
      mouseOver: false,
    }
  }

  componentDidMount() {
    this.td.addEventListener("mouseenter", () => {
      this.setState({
        mouseOver: true,
      })
    })

    this.td.addEventListener("mouseleave", () => {
      this.setState({
        mouseOver: false,
      })
    })

    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    })
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

  selectElement = event => {
    event.stopPropagation()
    const { editSelectedElement, rowIndex, index, data: { type, id } } = this.props
    if (type !== "Empty") {
      editSelectedElement(id, rowIndex, index)
    }
  }

  deleteColumn = () => {
    this.props.deleteCell(this.props.rowIndex, this.props.index)
  }

  render() {
    const {
      isDragging,
      connectDropTarget,
      connectDragSource,
      content,
      flex,
      data: { type, align, valign, styleOuter, styleInner },
    } = this.props
    const { isOver, mouseOver } = this.state
    const isOverStyle: Object = isOver ? _styles.isOverCell : {}

    return connectDragSource(
      connectDropTarget(
        <td
          ref={td => (this.td = td)}
          style={Object.assign({}, styleOuter, mouseOver && !isOver ? styles.mouseOver : {})}
          align={align}
          valign={valign}
          colSpan={flex}
          onTouchTap={this.selectElement}
        >
          <div style={Object.assign({}, styleInner, isOverStyle)}>{content}</div>
          {mouseOver && !isOver && type !== "Empty" ? (
            <div style={styles.trashWrapper}>
              <div style={styles.trash} onTouchTap={this.deleteColumn}>
                <i className="material-icons">delete</i>
              </div>
            </div>
          ) : null}
          {isDragging && <Layer />}
        </td>
      )
    )
  }
}

const styles: Object = {
  mouseOver: {
    boxShadow: "inset 0 0 4px black",
  },
  trashWrapper: {
    pointerEvents: "none",
    width: "100%",
    height: "30px",
    marginTop: "-30px",
    position: "relative",
    textAlign: "center",
  },
  trash: {
    cursor: "pointer",
    pointerEvents: "all",
    right: "2px",
    bottom: "2px",
    position: "absolute",
    background: colors.menuBg,
    color: colors.menuText,
    width: "50px",
    height: "100%",
    borderRadius: "4px",
  },
}

let component: React.ComponentType<*> = DropTarget(BLOCK, tableCellTarget, collectTarget)(TableCell)
component = DragSource(BLOCK, tableCellSource, collectSource)(component)
export default connect(null, mapDispatchToProps)(component)

// CUSTOM DRAG LAYER
class _Layer extends React.Component<*> {
  render() {
    const { type, currentOffset } = this.props
    const style = !currentOffset
      ? { display: "none" }
      : {
          transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
        }

    return (
      <div
        style={{
          position: "fixed",
          pointerEvents: "none",
          left: 0,
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={style}>
          {type === "Empty" ? <div style={{ padding: "20px" }}>EMPTY</div> : blockElements[type].renderThumbnail()}
        </div>
      </div>
    )
  }
}

const Layer = DragLayer(monitor => {
  return {
    type: monitor.getItem().type,
    currentOffset: monitor.getClientOffset(),
  }
})(_Layer)
