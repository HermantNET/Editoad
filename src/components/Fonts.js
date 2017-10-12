// @flow
import React from "react"
import { Quill } from "react-quill"
import _styles from "../styles"
import colors from "../styles/colors"
import { fonts } from "../reducers"

const Font: Object = Quill.import("formats/font")
Font.whitelist = fonts.map(font => font.toLowerCase())
Quill.register(Font, true)

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class Fonts extends React.PureComponent<Props> {
  static renderCss() {
    return (
      <style>
        .ql-snow .ql-picker.ql-font {"{ width: 150px; }"}
        {fonts.map(
          font =>
            `
            .ql-font span[data-label="${font}"]::before { font-family: "${font}"; }
            .ql-font-${font.split(" ")[0].toLowerCase()} {font-family: "${font}"; }
            `
        )}
      </style>
    )
  }

  static renderHtml() {
    return (
      <select className="ql-font">
        {fonts.map(font => <option value={font.split(" ")[0].toLowerCase()}>{font}</option>)}
        <option selected />
      </select>
    )
  }
  render() {
    return "Fonts"
  }
}

const styles = {}

export default Fonts
