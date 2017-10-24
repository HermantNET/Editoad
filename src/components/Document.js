// @flow
import * as React from "react"
import { connect } from "react-redux"
import { DropTarget } from "react-dnd"
import type { State, Row, Column, Document as DocumentType, TDPropertiesArray } from "../types"
import { LAYOUT } from "../constants"
import _styles from "../styles"
import { addLayout } from "../actions"
import { blockElements, layoutElements, Empty } from "./elements"
import Table from "./elements/Table"

// REDUX *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

const mapStateToProps = (state: State): { document: DocumentType } => {
  return {
    document: state.document,
  }
}

const mapDispatchToProps = (dispatch: Function): { [string]: Function } => {
  return {
    addLayout: (type: string, insertAtIndex: number) => dispatch(addLayout(type, insertAtIndex)),
  }
}

type Props = {
  id?: string,
  document: DocumentType,
  addLayout: Function,

  // Injected by React DnD:
  connectDropTarget: Function,
  isOver: boolean,
}

// REACT DnD *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

const documentTarget = {
  drop(props: Props, monitor: Object, component: React.ComponentType<*>) {
    // return if dropped on nested element
    if (!monitor.isOver({ shallow: true })) return
    // Obtain the dragged item
    const item: Object = monitor.getItem()
    props.addLayout(item.type, props.document.body.rows.length - 1)
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

/**
 * The document to be edited. Document is shown in the Editor component and is a visualisation of the created form.
 */
class Document extends React.Component<Props, { isOver: boolean }> {
  constructor(props: Object) {
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

  renderColumn = (col: Column | Object, columns: TDPropertiesArray, i): React.ComponentType<*> | Object => {
    let Column: React.ComponentType<*>
    if (col.type === "Empty") {
      Column = Empty
    } else {
      Column = blockElements[col.type]
    }

    columns.push(col)
    return <Column key={col.id} value={col.value} />
  }

  renderRow = (row: Row, rowIndex: number): React.ComponentType<*> | Object => {
    const Layout: React.ComponentType<*> = layoutElements[row.type]
    const columnData = []
    const content: Array<
      React.ComponentType<*> | Object
    > = row.columns.map((col: Column | Object, i: number): React.ComponentType<*> =>
      this.renderColumn(col, columnData, i)
    )

    return (
      <Table key={row.id}>
        <Layout content={content} data={columnData} rowIndex={rowIndex} />
      </Table>
    )
  }

  renderRows = () => {
    const rows: Array<Row> = this.props.document.body.rows
    return rows.map((row: Row, rowIndex: number): React.ComponentType<*> => this.renderRow(row, rowIndex))
  }

  render() {
    const { connectDropTarget, document } = this.props
    const { isOver } = this.state
    const isOverStyle: Object = isOver ? _styles.isOver : {}

    return connectDropTarget(
      <div>
        <Table id={this.props.id} style={{ backgroundColor: document.body.style.backgroundColor, minHeight: "240px" }}>
          <tr>
            <td style={document.body.style} align="center" valign="top">
              <div style={isOverStyle}>{this.renderRows()}</div>
            </td>
          </tr>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(LAYOUT, documentTarget, collect)(Document))
