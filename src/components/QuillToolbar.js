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
      <div id="quill-toolbar" style={{ position: "absolute", top: 0, left: 0, right: 0, margin: 0, padding: 0 }}>
        <div
          style={{
            position: "fixed",
            background: "#ffffff",
            left: 0,
            width: "100%",
            padding: "0.5rem",
            textAlign: "left",
          }}
        >
          {Fonts.renderHtml()}
          <span defaultValue="normal" className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-strike" />
            <button className="ql-underline" />
          </span>
          <span className="ql-formats">
            <select className="ql-color">
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
            <select className="ql-background">
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
          <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-blockquote" />
            <button className="ql-image" />
            <button className="ql-video" />
          </span>
          <span className="ql-formats">
            <button className="ql-align" />
            <button className="ql-align" value="center" />
            <button className="ql-align" value="right" />
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
          </span>
        </div>
      </div>
    )
  }
}

export default QuillToolbar
