// @flow
import React from "react"
import { Quill } from "react-quill"
import { fonts } from "../constants"

const Font: Object = Quill.import("formats/font")
Font.whitelist = fonts.map(font => font.replace(/ /g, "").toLowerCase())
Quill.register(Font, true)

const SizeStyle = Quill.import("attributors/style/size")
SizeStyle.whitelist = ["10px", "12px", "14px", "16px", "20px", "24px", "36px", "72px"]
Quill.register(SizeStyle, true)

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
      <span className="ql-formats">
        <select className="ql-font" defaultValue="">
          {fonts.map(font => (
            <option key={font} value={font.replace(/ /g, "").toLowerCase()}>
              {font}
            </option>
          ))}
          <option value="" />
        </select>
        <select className="ql-size" defaultValue="12px">
          {SizeStyle.whitelist.map(px => <option key={px}>{px}</option>)}
        </select>
      </span>
    )
  }
  render() {
    return <p>Fonts</p>
  }
}

export default Fonts
