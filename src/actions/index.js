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
 * Set the size of the editor (in pixels)
 */
export function editEditorSize(size: number): { type: string, size: number } {
  const type: string = actionTypes.EDIT_EDITOR_SIZE

  return {
    type,
    size,
  }
}

/**
 * Select an element by ID, setting it's to edit mode.
 */
export function editSelectedElement(
  element_id: string,
  rowIndex: number,
  cellIndex: number
): { type: string, element_id: string, rowIndex: number, cellIndex: number } {
  return {
    type: actionTypes.EDIT_SELECTED_ELEMENT,
    element_id,
    rowIndex,
    cellIndex,
  }
}

/**
 * Edit the value of a block/cell.
 */
export function editBlockValue(value: string | number): { type: string, value: string | number } {
  return {
    type: actionTypes.EDIT_BLOCK_VALUE,
    value,
  }
}
// DELETE   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
