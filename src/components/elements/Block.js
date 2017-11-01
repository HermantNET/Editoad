// @flow
import * as React from "react"
import { connect } from "react-redux"
import _styles from "../../styles"
import { editBlockValue } from "../../actions"

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
 * Provides state/shared functions to Block components.
 */
export default function(type: string, icon: string, handleChange: Function, renderEdit: Function) {
  class Block extends React.Component<Props> {
    static getType = () => type

    renderEdit = () => {
      return renderEdit(this.props.value, this.handleChange)
    }

    handleChange = (...args) => {
      handleChange.apply(this, [this.props.editBlockValue, ...args])
    }

    static renderThumbnail() {
      return (
        <div style={_styles.thumbnailStyles.wrapper}>
          <div>
            <i style={_styles.thumbnailStyles.icon} className="material-icons">
              {icon}
            </i>
          </div>
          {type.toUpperCase()}
        </div>
      )
    }

    render() {
      const { edit, value } = this.props
      if (edit) return this.renderEdit()
      else if (!value || value === "" || value === "<p></p>" || value === "<p><br></p>") return Block.renderThumbnail()
      else return <div dangerouslySetInnerHTML={{ __html: value }} />
    }
  }

  return connect(null, mapDispatchToProps)(Block)
}
