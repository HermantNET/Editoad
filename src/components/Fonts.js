// @flow
import React from "react"
import { Quill } from "react-quill"
import { fonts } from "../constants"

const Font: Object = Quill.import("formats/font")
Font.whitelist = fonts.map(font => font.replace(/ /g, "").toLowerCase())
Quill.register(Font, true)

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class Fonts extends React.PureComponent<Props> {
  static renderCss() {
    return (
      <style>
        .ql-snow .ql-picker.ql-font {"{ width: 130px; font-size: 12px; }"}
        {fonts.map(
          font =>
            `
            .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="${font.replace(/ /g, "").toLowerCase()}"]::before,
            .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="${font.replace(/ /g, "").toLowerCase()}"]::before {
                content: '${font}';  font-family: '${font}';
            }
            .ql-font-${font.replace(/ /g, "").toLowerCase()} {font-family: "${font}"; }
            `
        )}
      </style>
    )
  }

  static renderHtml() {
    return (
      <select className="ql-font">
        {fonts.map(font => <option value={font.replace(/ /g, "").toLowerCase()}>{font}</option>)}
        <option selected />
      </select>
    )
  }
  render() {
    return "Fonts"
  }
}

export default Fonts
