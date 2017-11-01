// @flow
import * as React from "react"
import { connect } from "react-redux"
import type { TDProperties } from "../../types"
import { moveRow, deleteRow } from "../../actions"
import _styles from "../../styles"
import colors from "../../styles/colors"
import Table from "./Table"

type Props = {
  content: Array<*>,
  columnData: Array<*>,
  rowIndex: number,
  Component: React.ReactNode,
  deleteRow: Function,
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    deleteRow: rowIndex => dispatch(deleteRow(rowIndex)),
  }
}

class Layout extends React.Component<Props, *> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isOver: false,
    }
  }

  mouseEnter = () => {
    if (typeof this.props.rowIndex === "undefined") return
    this.setState({
      isOver: true,
    })
  }

  mouseLeave = () => {
    if (typeof this.props.rowIndex === "undefined") return
    this.setState({
      isOver: false,
    })
  }

  render() {
    const { content, columnData, rowIndex, Component, deleteRow } = this.props
    const { isOver } = this.state
    return (
      <Table onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Component content={content} data={columnData} rowIndex={rowIndex} />
        {isOver && (
          <div onTouchTap={deleteRow.bind(this, rowIndex)} style={styles.menu}>
            <i className="material-icons">delete</i>
          </div>
        )}
      </Table>
    )
  }
}

const styles = {
  menu: {
    backgroundColor: colors.menuBg,
    cursor: "pointer",
    color: colors.menuText,
    position: "absolute",
    padding: "12px",
    borderRadius: "2px",
  },
}

export default connect(null, mapDispatchToProps)(Layout)
