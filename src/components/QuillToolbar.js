// @flow
import React from "react"
import Fonts from "./Fonts"

type Props = {}

/**
 * View and edit properties for a selected element.
 */
class QuillToolbar extends React.PureComponent<Props> {
  render() {
    return (
      <div id="quill-toolbar">
        {Fonts.renderHtml()}
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-strike" />
        <button className="ql-underline" />
      </div>
    )
  }
}

export default QuillToolbar
