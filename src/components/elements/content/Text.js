// @flow
import React from "react"
import Quill from "react-quill"
import theme from "react-quill/dist/quill.snow.css"
import _styles from "../../../styles"
import colors from "../../../styles/colors"
import QuillToolbar from "../../QuillToolbar"

type Props = {
  value: string,
  edit: boolean,
}

/**
 * View and edit properties for a selected element.
 */
class Text extends React.Component<Props> {
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

  renderEdit() {
    const modules: Object = {
      toolbar: { container: "#quill-toolbar" },
    }

    return (
      <div>
        <QuillToolbar />
        <Quill value={this.props.value} modules={modules} />
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

const styles = {}

export default Text
