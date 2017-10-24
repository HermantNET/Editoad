// @flow
import React from "react"
import { connect } from "react-redux"
import Quill from "react-quill"
import "react-quill/dist/quill.snow.css"
import _styles from "../../../styles"
import QuillToolbar from "../../QuillToolbar"
import { editBlockValue } from "../../../actions"

const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    editBlockValue: value => dispatch(editBlockValue(value)),
  }
}

type Props = {
  value: string,
  edit: boolean,
  editBlockValue: Function,
}

/**
 * View and edit properties for a selected element.
 */
class Text extends React.Component<Props> {
  static getType = () => "Text"

  static renderThumbnail() {
    return (
      <div style={_styles.thumbnailStyles.wrapper}>
        <div>
          <i style={_styles.thumbnailStyles.icon} className="material-icons">
            &#xE262;
          </i>
        </div>
        TEXT
      </div>
    )
  }

  handleChange = (value: string) => {
    // if (this.inputTimeout) this.inputTimeout.clearTimeout()
    // this.inputTimeout = setTimeout(() => {
    this.props.editBlockValue(value)
    // }, 50)
  }

  renderEdit = () => {
    const modules: Object = {
      toolbar: { container: "#quill-toolbar" },
    }

    return (
      <div>
        <QuillToolbar />
        <Quill defaultValue={this.props.value} onChange={this.handleChange} modules={modules} />
      </div>
    )
  }

  render() {
    if (this.props.edit) {
      return this.renderEdit()
    } else {
      return <div dangerouslySetInnerHTML={{ __html: this.props.value }} />
    }
  }
}

export default connect(null, mapDispatchToProps)(Text)
