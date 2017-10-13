// @flow
import * as React from "react"
import _styles from "../../styles"
import colors from "../../styles/colors"

type Props = {
  id?: string,
  align?: "left" | "right" | "center",
  style: { [string]: string },
  children: React.Node,
}

/**
 * View and edit properties for a selected element.
 */
class Table extends React.Component<Props> {
  render() {
    return (
      <table
        id={this.props.id}
        align={this.props.align || "center"}
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        style={this.props.style}
      >
        {this.props.children}
      </table>
    )
  }
}

const styles = {}

export default Table
