// @flow
import set from "lodash/fp/set"
import get from "lodash/fp/get"
import slice from "lodash/fp/slice"
import drop from "lodash/fp/drop"
import assign from "lodash/fp/assign"
import flow from "lodash/fp/flow"
import pullAt from "lodash/fp/pullAt"
import type { State, Action, Document, Row } from "../types"
import * as actionTypes from "../actions/action-types"
import { newRow, newColumn, emptyCol } from "../generators"

/**
* Reducer for Document data.
*/
export default function documentReducer(state: Document, action: Action, rootState: State): Document {
  switch (action.type) {
    case actionTypes.ADD_LAYOUT: {
      const row = newRow(action.layoutType)
      const newRowsArray: Array<Row> = [
        ...slice(0, action.insertAtIndex + 1, state.body.rows),
        row,
        ...drop(action.insertAtIndex + 1, state.body.rows),
      ]

      console.log("REDUX (document): Add layout", row)
      return set("body.rows", newRowsArray, state)
    }

    case actionTypes.ADD_BLOCK: {
      const { insertAtRowIndex, insertAtCellIndex, blockType } = action
      const col = newColumn(blockType, "", {})

      console.log("REDUX (document): Add block", col)
      return set(`body.rows[${insertAtRowIndex}].columns[${insertAtCellIndex}]`, col, state)
    }

    case actionTypes.EDIT_BLOCK_VALUE: {
      const { value } = action
      const { selected_rowIndex, selected_cellIndex } = rootState.editor

      console.log("REDUX (document): Edit block value", value)
      return set(`body.rows[${selected_rowIndex}].columns[${selected_cellIndex}].value`, value, state)
    }

    case actionTypes.EDIT_BLOCK_STYLE: {
      const { styleInner, styleOuter } = action
      const { selected_rowIndex, selected_cellIndex } = rootState.editor
      const path = `body.rows[${selected_rowIndex}].columns[${selected_cellIndex}]`

      let altered_state = state
      if (styleInner) {
        const siPath = `${path}.styleInner`
        altered_state = set(siPath, assign(get(siPath, altered_state), styleInner), altered_state)
      }
      if (styleOuter) {
        const soPath = `${path}.styleOuter`
        altered_state = set(soPath, assign(get(soPath, altered_state), styleOuter), altered_state)
      }

      console.log("REDUX (document): Edit block style", styleInner, styleOuter)
      return altered_state
    }

    case actionTypes.EDIT_BODY_STYLE: {
      const { style } = action

      console.log("REDUX (document): Edit body style", style)
      return set("body.style", assign(get("body.style", state), style), state)
    }

    case actionTypes.EDIT_BLOCK_ALIGNMENTS: {
      const { align, valign } = action
      const { selected_rowIndex, selected_cellIndex } = rootState.editor
      const path = `body.rows[${selected_rowIndex}].columns[${selected_cellIndex}]`

      let altered_state = state
      if (align) {
        altered_state = set(`${path}.align`, align, altered_state)
      }
      if (valign) {
        altered_state = set(`${path}.valign`, valign, altered_state)
      }

      console.log("REDUX (document): Edit block alignments", align, valign)
      return altered_state
    }

    case actionTypes.MOVE_CELL: {
      const { cellRowIndex, cellIndex, targetRowIndex, targetCellIndex } = action

      // return same state if moving cell to same position
      if (cellRowIndex === targetRowIndex && cellIndex === targetCellIndex) return state

      const pathOld: string = `body.rows[${cellRowIndex}].columns[${cellIndex}]`
      const pathNew: string = `body.rows[${targetRowIndex}].columns[${targetCellIndex}]`

      return flow(set(pathNew, get(pathOld, state)), set(pathOld, get(pathNew, state)))(state)
    }

    case actionTypes.DELETE_CELL: {
      const { cellRowIndex, cellIndex } = action
      console.log("REDUX (document): Delete cell", cellRowIndex, cellIndex)
      return set(`body.rows[${cellRowIndex}].columns[${cellIndex}]`, emptyCol(), state)
    }

    case actionTypes.DELETE_ROW: {
      const { rowIndex } = action
      console.log("REDUX (document): Delete row", rowIndex)
      return set(`body.rows`, pullAt([rowIndex], state.body.rows), state)
    }

    default: {
      console.log("REDUX (document): Returning default state")
      return state
    }
  }
}
