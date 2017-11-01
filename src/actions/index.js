// @flow
import * as actionTypes from "./action-types"
import type { style, align, valign } from "../types"

// GET      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

export function _getCode(): { type: string } {
  return {
    type: actionTypes.GET_CODE,
  }
}

/**
 * Get the code from the hidden DOM element rendering the generated document
 */
export function getCode() {
  return (dispatch: Promise<*>) => {
    Promise.resolve()
      .then(() => {
        dispatch(editSelectedElement())
      })
      .then(() => {
        dispatch(_getCode())
      })
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

// -- Editor
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
  element_id: string = "none",
  rowIndex: number = -1,
  cellIndex: number = -1
): { type: string, element_id: string, rowIndex: number, cellIndex: number } {
  return {
    type: actionTypes.EDIT_SELECTED_ELEMENT,
    element_id,
    rowIndex,
    cellIndex,
  }
}

// -- Document
// ---- Body
/**
 * Edit the style of the documents body. 
 */
export function editBodyStyle(style: style | null): { type: string, style: style | null } {
  return {
    type: actionTypes.EDIT_BODY_STYLE,
    style,
  }
}

// ---- Block
/**
 * Edit the value of a block/cell.
 */
export function editBlockValue(value: string | number): { type: string, value: string | number } {
  return {
    type: actionTypes.EDIT_BLOCK_VALUE,
    value,
  }
}

/**
 * Edit the inner and outer styles of a block/cell.
 */
export function editBlockStyle(
  styleInner: style | null,
  styleOuter: style | null
): { type: string, styleInner: style | null, styleOuter: style | null } {
  return {
    type: actionTypes.EDIT_BLOCK_STYLE,
    styleInner,
    styleOuter,
  }
}

/**
 * Modifiy the align and valign values of a block/cell. 
 */
export function editBlockAlignments(
  align: align | null,
  valign: valign | null
): { type: string, align: align | null, valign: valign | null } {
  return {
    type: actionTypes.EDIT_BLOCK_ALIGNMENTS,
    align,
    valign,
  }
}

/**
 * Switches data between 2 cells.
 */
export function moveCell(
  cellRowIndex: number,
  cellIndex: number,
  targetRowIndex: number,
  targetCellIndex: number
): {
  type: string,
  cellRowIndex: number,
  cellIndex: number,
  targetRowIndex: number,
  targetCellIndex: number,
} {
  return {
    type: actionTypes.MOVE_CELL,
    cellRowIndex,
    cellIndex,
    targetRowIndex,
    targetCellIndex,
  }
}

/**
 * Switches data between 2 rows.
 */
export function moveRow(
  rowIndex: number,
  targetRowIndex: number
): {
  type: string,
  rowIndex: number,
  targetRowIndex: number,
} {
  return {
    type: actionTypes.MOVE_CELL,
    rowIndex,
    targetRowIndex,
  }
}
// DELETE   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

/**
 * Set a cell to empty at a given row and cell index.
 */
export function deleteCell(
  cellRowIndex: number,
  cellIndex: number
): {
  type: string,
  cellRowIndex: number,
  cellIndex: number,
} {
  return {
    type: actionTypes.DELETE_CELL,
    cellRowIndex,
    cellIndex,
  }
}

/**
 * Delete a row from the document at the given row index. 
 */
export function deleteRow(
  rowIndex: number
): {
  type: string,
  rowIndex: number,
} {
  return {
    type: actionTypes.DELETE_ROW,
    rowIndex,
  }
}
