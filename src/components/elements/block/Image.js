// @flow
import React from "react"
import Block from "../Block"
import _styles from "../../../styles"

const handleChange: Function = (editBlockValue: Function, e: Object) => {
  console.log("CATS", e.target)
  const reader = new FileReader()
  reader.onload = () => {
    editBlockValue(reader.result ? `<img style="max-width: 100%;" src="${reader.result}" />` : "")
  }
  reader.readAsDataURL(e.target.files[0])
}

const renderEdit: Function = (value: string, handleChange: Function) => {
  return (
    <div style={_styles.editBox}>
      <div dangerouslySetInnerHTML={{ __html: value }} />
      <div style={_styles.py_3}>Upload Image</div>
      <input type="file" accept="image/*" onChange={handleChange} style={_styles.pb_3} />
    </div>
  )
}

/**
 * Image Block element.
 */
export default Block("Image", "image", handleChange, renderEdit)
