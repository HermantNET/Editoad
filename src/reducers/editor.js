// @flow
import set from "lodash/fp/set"
import type { State, Editor } from "../types"
import * as actionTypes from "../actions/action-types"

/**
* Reducer for editor data.
*/
export default function editorReducer(state: Editor, action: Object, rootState: State): Editor {
  switch (action.type) {
    case actionTypes.EDIT_EDITOR_SIZE: {
      console.log("REDUX (editor): Edit editor size", action.size)
      return set("size", action.size, state)
    }

    case actionTypes.EDIT_SELECTED_ELEMENT: {
      console.log("REDUX (editor): Edit selected element", action.element_id)
      if (action.element_id === state.selected_id) {
        console.log("REDUX (editor): Already selected!")
        return state
      } else {
        return Object.assign({}, state, {
          selected_id: action.element_id,
          selected_rowIndex: action.rowIndex,
          selected_cellIndex: action.cellIndex,
        })
      }
    }

    default: {
      return state
    }
  }
}
