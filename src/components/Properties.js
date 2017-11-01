// @flow
import React from "react"
import { connect } from "react-redux"
import { editBlockStyle, editBlockAlignments } from "../actions"
import type { Editor, Document, State } from "../types"
import _styles from "../styles"

const mapStateToProps = (state: State): Object => {
  return {
    editor: state.editor,
    document: state.document,
  }
}

const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    editStyleInner: styleInner => dispatch(editBlockStyle(styleInner, null)),
    editStyleOuter: styleOuter => dispatch(editBlockStyle(null, styleOuter)),
    editAlign: align => dispatch(editBlockAlignments(align, null)),
    editValign: valign => dispatch(editBlockAlignments(null, valign)),
  }
}

type Props = {
  editor: Editor,
  document: Document,
  editStyleInner: Function,
  editStyleOuter: Function,
  editAlign: Function,
  editValign: Function,
}

/**
 * View and edit properties for a selected element.
 */
class Properties extends React.Component<Props, *> {
  // styleInner handler
  innerChange = e => {
    const { editStyleInner } = this.props
    const property: string = e.target.name
    const value: string = e.target.value
    editStyleInner({ [property]: value })
  }

  // styleOuter handler
  outerChange = e => {
    const { editStyleOuter } = this.props
    const property: string = e.target.name
    const value: string = e.target.value
    editStyleOuter({ [property]: value })
  }

  alignChange = e => {
    const { editAlign } = this.props
    const val = e.target.value
    let timeout
    timeout && timeout.clearTimeout()
    timeout = setTimeout(() => {
      editAlign(val)
    }, 100)
  }

  valignChange = e => {
    const { editValign } = this.props
    const val = e.target.value
    let timeout
    timeout && timeout.clearTimeout()
    timeout = setTimeout(() => {
      editValign(val)
    }, 100)
  }

  render() {
    const { editor, document: { body: { rows } } } = this.props
    const { selected_id, selected_rowIndex, selected_cellIndex } = editor

    if (selected_id === "none" || selected_rowIndex === -1) {
      return <p style={Object.assign({}, _styles.mt_4, _styles.text_center)}>Nothing selected</p>
    } else {
      let element
      if (selected_cellIndex > -1) {
        element = rows[selected_rowIndex].columns[selected_cellIndex]
      } else {
        element = rows[selected_rowIndex]
      }

      const { align, valign, styleInner, styleOuter } = element

      return (
        <div>
          <div>
            <h4>Alignment</h4>

            <div style={_styles.propertyGroup}>
              <label>Horizontal: </label>
              <select onChange={this.alignChange} defaultValue={align}>
                <option>left</option>
                <option>center</option>
                <option>right</option>
              </select>
            </div>

            <div style={_styles.propertyGroup}>
              <label>Verical: </label>
              <select onChange={this.valignChange} defaultValue={valign}>
                <option>top</option>
                <option>middle</option>
                <option>bottom</option>
                <option>baseline</option>
              </select>
            </div>
          </div>

          <hr />

          <div>
            <h4>Inner Style</h4>

            <div style={_styles.propertyGroup}>
              <label>Height: </label>
              <input type="text" name="height" onChange={this.innerChange} defaultValue={styleInner.height} />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Width: </label>
              <input type="text" name="width" onChange={this.innerChange} defaultValue={styleInner.width} />
            </div>

            <br />

            <div style={_styles.propertyGroup}>
              <label>Margin: </label>
              <input type="text" name="margin" onChange={this.innerChange} defaultValue={styleInner.margin} />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Padding: </label>
              <input type="text" name="padding" onChange={this.innerChange} defaultValue={styleInner.padding} />
            </div>

            <br />

            <div style={_styles.propertyGroup}>
              <label>Text Color: </label>
              <input type="color" name="color" onChange={this.innerChange} defaultValue={styleInner.color} />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Background Color: </label>
              <input
                type="color"
                name="backgroundColor"
                onChange={this.innerChange}
                defaultValue={styleInner.backgroundColor}
              />
            </div>

            <br />

            <div style={_styles.propertyGroup}>
              <label>Border Style: </label>
              <select name="borderStyle" onChange={this.innerChange} defaultValue={styleInner.borderStyle || "none"}>
                <option>none</option>
                <option>solid</option>
                <option>dashed</option>
                <option>dotted</option>
              </select>
            </div>

            <div style={_styles.propertyGroup}>
              <label>Border Color: </label>
              <input
                type="color"
                name="borderColor"
                onChange={this.innerChange}
                defaultValue={styleInner.borderColor}
              />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Border Width: </label>
              <input type="text" name="borderWidth" onChange={this.innerChange} defaultValue={styleInner.borderWidth} />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Border Radius: </label>
              <input
                type="text"
                name="borderRadius"
                onChange={this.innerChange}
                defaultValue={styleInner.borderRadius}
              />
            </div>
          </div>

          <hr />

          <div>
            <h4>Outer Style</h4>

            <div style={_styles.propertyGroup}>
              <label>Background Color: </label>
              <input
                type="color"
                name="backgroundColor"
                onChange={this.outerChange}
                defaultValue={styleOuter.backgroundColor}
              />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Padding: </label>
              <input type="text" name="padding" onChange={this.outerChange} defaultValue={styleOuter.padding} />
            </div>

            <div style={_styles.propertyGroup}>
              <label>Border Radius: </label>
              <input
                type="text"
                name="borderRadius"
                onChange={this.outerChange}
                defaultValue={styleOuter.borderRadius}
              />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Properties)
