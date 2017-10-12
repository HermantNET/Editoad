// @flow
import * as actionTypes from "../actions/action-types"
import set from "lodash/fp/set"

export type State = {
  editor: {
    size: string,
  },
}

export const fonts = ["Arial", "Courier New", "Courier", "Georgia", "Helvetica", "Monospace", "Times New Roman"]

const defaultState: State = {
  editor: {
    size: "98%",
    fonts,
  },
  document: {
    // body will be rendered into the rendered documents body.
    body: {
      style: {
        backgroundColor: "#FFFFFF",
        padding: "20px",
      },
      rows: [
        {
          type: "Single",
          flex: [1],
          columns: [
            {
              type: "Text",
              value: "<p>Hello, World!</p>",
            },
          ],
        },
      ],
    },
  },
}

/**
* The entry point reducer for the application. All state changes that are
* non-visual start here.
*/
export default function masterReducer(state: Object = defaultState, action: Object): Object {
  switch (action.type) {
    case actionTypes.EDIT_EDITOR_SIZE: {
      return set("editor.size", action.size, state)
    }

    default: {
      return state
    }
  }
}
