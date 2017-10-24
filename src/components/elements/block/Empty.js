// @flow
import * as React from "react"

/**
 * Empty Block element.
 */
export default class Empty extends React.Component<{ value: string }> {
  render() {
    return <div>{this.props.value}</div>
  }
}
