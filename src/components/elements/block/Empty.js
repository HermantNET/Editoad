// @flow
import * as React from "react"

/**
 * Empty Block element.
 */
export default class Empty extends React.Component<{ value: string }> {
  render() {
    return (
      <table height="100%">
        <tbody>
          <tr>
            <td valign="middle">{this.props.value}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
