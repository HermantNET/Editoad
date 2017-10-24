// @flow
import set from "lodash/fp/set"
import type { Editor } from "../types"
import * as actionTypes from "../actions/action-types"

/**
* Reducer for editor data.
*/
export default function editorReducer(state: Editor, action: Object): Editor {
  switch (action.type) {
    case actionTypes.EDIT_EDITOR_SIZE: {
      return set("size", action.size, state)
    }

    default: {
      return state
    }
  }
}
