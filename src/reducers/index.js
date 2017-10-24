// @flow
import set from "lodash/fp/set"
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
  switch (action.type) {
    // Editor Reducer
    case actionTypes.EDIT_EDITOR_SIZE: {
      return set("editor", editorReducer(state.editor, action), state)
    }

    // Document Reducer
    case actionTypes.ADD_BLOCK:
    case actionTypes.ADD_LAYOUT: {
      console.log("REDUX: Accessing document reducer")
      return set("document", documentReducer(state.document, action), state)
    }

    default: {
      return state
    }
  }
}
