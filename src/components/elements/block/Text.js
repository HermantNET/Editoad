// @flow
import React from "react"
import { connect } from "react-redux"
import ReactQuill, { Quill } from "react-quill"
import "react-quill/dist/quill.snow.css"
import _styles from "../../../styles"
import QuillToolbar from "../../QuillToolbar"
import { editBlockValue } from "../../../actions"

// Use inline styles instead of classes
const BackgroundClass = Quill.import("attributors/style/background")
const ColorClass = Quill.import("attributors/style/color")
const SizeStyle = Quill.import("attributors/style/size")
const AlignStyle = Quill.import("attributors/style/align")
const FontStyle = Quill.import("attributors/style/font")
Quill.register(BackgroundClass, true)
Quill.register(ColorClass, true)
Quill.register(SizeStyle, true)
Quill.register(AlignStyle, true)
Quill.register(FontStyle, true)

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

  handleChange = (value: string, _delta, _source, editor: Object) => {
    // if (this.inputTimeout) this.inputTimeout.clearTimeout()
    // this.inputTimeout = setTimeout(() => {
    this.props.editBlockValue(editor.getHTML())
    // }, 50)
  }

  renderEdit = () => {
    const modules: Object = {
      toolbar: { container: "#quill-toolbar" },
    }

    return (
      <div>
        <QuillToolbar />
        <ReactQuill defaultValue={this.props.value} onChange={this.handleChange} modules={modules} />
      </div>
    )
  }

  render() {
    const { edit, value } = this.props

    if (edit) {
      return this.renderEdit()
    } else if (!value || value === "") {
      return <div>{Text.renderThumbnail()}</div>
    } else {
      return <div dangerouslySetInnerHTML={{ __html: value }} />
    }
  }
}

export default connect(null, mapDispatchToProps)(Text)
