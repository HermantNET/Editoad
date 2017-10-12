// @flow
import * as actionTypes from "./action-types"

// GET      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
/**
 * Get the code from the hidden DOM element rendering the generated document
 */
export function getCode(): Object {
  const el: null | HTMLElement = document.getElementById("melons-document")
  const type: string = actionTypes.GET_CODE
  const code: string = el ? el.innerHTML : "Error"

  console.log("GET_CODE", code)

  return {
    type,
    code,
  }
}
// ADD      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// EDIT     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
/**
 * Modify the size of the editor (in pixels)
 */
export function editEditorSize(size: string): Object {
  const type: string = actionTypes.EDIT_EDITOR_SIZE

  return {
    type,
    size,
  }
}

// DELETE   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
