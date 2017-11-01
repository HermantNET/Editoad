// @flow
import React from "react"
import ReactQuill, { Quill } from "react-quill"
import "react-quill/dist/quill.snow.css"
import Block from "../Block"
import QuillToolbar from "../../QuillToolbar"

// Use inline styles instead of classes
const BackgroundClass = Quill.import("attributors/style/background")
const ColorClass = Quill.import("attributors/style/color")
const AlignStyle = Quill.import("attributors/style/align")
Quill.register(BackgroundClass, true)
Quill.register(ColorClass, true)
Quill.register(AlignStyle, true)

const handleChange: Function = (editBlockValue: Function, value: string, _delta: *, _source: *, editor: Object) =>
  editBlockValue(editor.getHTML())

const renderEdit: Function = (value: string, handleChange: Function) => {
  return (
    <div>
      <QuillToolbar />
      <ReactQuill defaultValue={value} onChange={handleChange} modules={{ toolbar: { container: "#quill-toolbar" } }} />
    </div>
  )
}

/**
 * Text Block element.
 */
export default Block("Text", "text_fields", handleChange, renderEdit)
