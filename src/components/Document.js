// @flow
import React from "react"
import { connect } from "react-redux"
import type { State } from "../reducers"
import _styles from "../styles"
import colors from "../styles/colors"
import { contentElements, layoutElements } from "./elements"
import Table from "./elements/Table"

type Props = {
  id?: string,
  testValue: string,
  document: Object,
}

const mapStateToProps = (state: State) => {
  return {
    testValue: state.document.body.rows[0].columns[0].value,
    document: state.document,
  }
}

/**
 * View and edit properties for a selected element.
 */
class Properties extends React.Component<Props> {
  render() {
    return (
      <Table id={this.props.id} style={Object.assign({}, { minHeight: "240px" }, this.props.document.body.style)}>
        <layoutElements.Single content={[<contentElements.Text value={this.props.testValue} edit={false} />]} />
        <layoutElements.Double
          content={[
            <contentElements.Text value={"Cats Meow"} edit={false} />,
            <contentElements.Text value={"Cats Meow"} edit={false} />,
          ]}
        />
      </Table>
    )
  }
}

const styles = {}

export default connect(mapStateToProps)(Properties)
