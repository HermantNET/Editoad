// @flow
import set from "lodash/fp/set"
import slice from "lodash/fp/slice"
import drop from "lodash/fp/drop"
import type { Action, Document, Row } from "../types"
import * as actionTypes from "../actions/action-types"
import { newRow, newColumn } from "../generators"

/**
* Reducer for Document data.
*/
export default function documentReducer(state: Document, action: Action): Document {
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

      const col = newColumn(blockType, "Placeholder content...", {}, {})

      console.log("REDUX (document): Add block", col)
      return set(`body.rows[${insertAtRowIndex}].columns[${insertAtCellIndex}]`, col, state)
    }

    default: {
      console.log("REDUX (document): Returning default state")
      return state
    }
  }
}