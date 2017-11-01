// @flow
import set from "lodash/fp/set"
import styleData from "style-data"
import type { State } from "../types"
import { defaultState } from "../constants"
import * as actionTypes from "../actions/action-types"
import editorReducer from "./editor"
import documentReducer from "./document"

/**
* The entry point reducer for the application. All state changes that are
* non-visual start here.
*/
export default function masterReducer(state: State = defaultState, action: Object): State {
  let altered_state: State = state

  switch (action.type) {
    // Editor Reducer
    case actionTypes.EDIT_SELECTED_ELEMENT:
    case actionTypes.EDIT_EDITOR_SIZE: {
      console.log("REDUX: Accessing editor reducer")
      return set("editor", editorReducer(state.editor, action, state), state)
    }

    // Document Reducer
    case actionTypes.MOVE_CELL:
    case actionTypes.ADD_BLOCK:
    case actionTypes.ADD_LAYOUT: {
      console.log("REDUX: Resetting selected element")
      altered_state = set(
        "editor",
        Object.assign({}, altered_state.editor, {
          selected_id: "none",
          selected_rowIndex: -1,
          selected_cellIndex: -1,
        }),
        altered_state
      )
    }
    case actionTypes.EDIT_BODY_STYLE:
    case actionTypes.EDIT_BLOCK_STYLE:
    case actionTypes.EDIT_BLOCK_ALIGNMENTS:
    case actionTypes.DELETE_CELL:
    case actionTypes.DELETE_ROW:
    case actionTypes.EDIT_BLOCK_VALUE: {
      console.log("REDUX: Accessing document reducer")
      return set("document", documentReducer(altered_state.document, action, altered_state), altered_state)
    }

    case actionTypes.GET_CODE: {
      const container: HTMLElement | null = document.getElementById("melons-document")
      let code: string = ""
      styleData(
        container.innerHTML.replace(/ draggable="true"| style=""/g, ""),
        { removeStyleTags: true, applyStyleTags: true },
        (err, result) => (code = result.html)
      )

      console.log("REDUX: Getting code", code)
      return set("documentHtml", code, state)
    }

    default: {
      return state
    }
  }
}
