// @flow
import * as actionTypes from "./action-types"

// GET      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
/**
 * Get the code from the hidden DOM element rendering the generated document
 */
export function getCode(): { type: string, code: string } {
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
/**
 * Add Layout element to the Document.
 */
export function addLayout(
  layoutType: string,
  insertAtIndex: number
): { type: string, layoutType: string, insertAtIndex: number } {
  const type: string = actionTypes.ADD_LAYOUT

  return {
    type,
    layoutType,
    insertAtIndex,
  }
}

/**
 * Add Block element to the Document.
 */
export function addBlock(
  blockType: string,
  insertAtRowIndex: number,
  insertAtCellIndex: number
): { type: string, blockType: string, insertAtRowIndex: number, insertAtCellIndex: number } {
  return {
    type: actionTypes.ADD_BLOCK,
    blockType,
    insertAtRowIndex,
    insertAtCellIndex,
  }
}
// EDIT     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
/**
 * Modify the size of the editor (in pixels)
 */
export function editEditorSize(size: string): { type: string, size: string } {
  const type: string = actionTypes.EDIT_EDITOR_SIZE

  return {
    type,
    size,
  }
}

// DELETE   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
