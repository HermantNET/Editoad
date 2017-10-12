// @flow
import React from "react"
import { connect } from "react-redux"
import _styles from "../styles"
import colors from "../styles/colors"
import { contentElements, layoutElements } from "./elements"

type Props = {
  id?: string,
  testValue: string,
}

const mapStateToProps = state => {
  return {
    testValue: state.document.body.rows[0].columns[0].value,
  }
}

/**
 * View and edit properties for a selected element.
 */
class Properties extends React.Component<Props> {
  render() {
    return (
      <div id={this.props.id}>
        <layoutElements.Single content={[<contentElements.Text value={this.props.testValue} />]} />
      </div>
    )
  }
}

const styles = {}

export default connect(mapStateToProps)(Properties)
