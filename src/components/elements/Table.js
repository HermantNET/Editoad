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
    const { align, style, children, ...props } = this.props
    return (
      <table
        align={this.props.align || "center"}
        border="0"
        // cellpadding="0"
        // cellspacing="0"
        width="100%"
        height="100%"
        style={Object.assign({}, { tableLayout: "fixed", boxSizing: "border-box", borderCollapse: "collapse" }, style)}
        {...props}
      >
        <tbody>{children}</tbody>
      </table>
    )
  }
}

export default Table
