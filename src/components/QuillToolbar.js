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
        <span class="ql-formats">{Fonts.renderHtml()}</span>
        <span class="ql-formats">
          <select class="ql-color">
            <option value="rgb(0, 0, 0)" />
            <option value="rgb(230, 0, 0)" />
            <option value="rgb(255, 153, 0)" />
            <option value="rgb(255, 255, 0)" />
            <option value="rgb(0, 138, 0)" />
            <option value="rgb(0, 102, 204)" />
            <option value="rgb(153, 51, 255)" />
            <option value="rgb(255, 255, 255)" />
            <option value="rgb(250, 204, 204)" />
            <option value="rgb(255, 235, 204)" />
            <option value="rgb(204, 224, 245)" />
            <option value="rgb(235, 214, 255)" />
            <option value="rgb(187, 187, 187)" />
            <option value="rgb(102, 185, 102)" />
          </select>
          <select class="ql-background">
            <option value="rgb(0, 0, 0)" />
            <option value="rgb(230, 0, 0)" />
            <option value="rgb(255, 153, 0)" />
            <option value="rgb(255, 255, 0)" />
            <option value="rgb(0, 138, 0)" />
            <option value="rgb(0, 102, 204)" />
            <option value="rgb(153, 51, 255)" />
            <option value="rgb(255, 255, 255)" />
            <option value="rgb(250, 204, 204)" />
            <option value="rgb(255, 235, 204)" />
            <option value="rgb(204, 224, 245)" />
            <option value="rgb(235, 214, 255)" />
            <option value="rgb(187, 187, 187)" />
            <option value="rgb(102, 185, 102)" />
          </select>
        </span>
        <span class="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-strike" />
          <button className="ql-underline" />
        </span>
        <span class="ql-formats">
          <button className="ql-link" />
          <button className="ql-blockquote" />
          <button className="ql-image" />
          <button className="ql-video" />
        </span>
        <span class="ql-formats">
          <button className="ql-align" />
          <button className="ql-align" value="center" />
          <button className="ql-align" value="right" />
        </span>
        <span class="ql-formats">
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
        </span>
      </div>
    )
  }
}

export default QuillToolbar
