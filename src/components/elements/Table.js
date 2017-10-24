// @flow
import * as React from "react"

type Props = {
  id?: string,
  className?: string,
  align?: "left" | "right" | "center",
  style?: { [string]: * },
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
        className={this.props.className}
        align={this.props.align || "center"}
        border="0"
        // cellpadding="0"
        // cellspacing="0"
        width="100%"
        style={Object.assign(
          {},
          { tableLayout: "fixed", boxSizing: "border-box", borderCollapse: "collapse" },
          this.props.style
        )}
      >
        <tbody>{this.props.children}</tbody>
      </table>
    )
  }
}

export default Table
