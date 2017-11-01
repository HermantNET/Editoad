// @flow
import type { State } from "./types"

// React DnD types
export const LAYOUT: string = "LAYOUT"
export const BLOCK: string = "BLOCK"

export const fonts: Array<string> = [
  "Arial",
  "Comic Sans MS",
  "Courier New",
  "Georgia",
  "Helvetica",
  "Impact",
  "Lucida Sans Unicode",
  "Monospace",
  "Times New Roman",
  "Verdana",
]

export const defaultState: State = {
  editor: {
    size: -1,
    fonts,
    selected_id: "none", // ID of the selected element
    selected_rowIndex: -1,
    selected_cellIndex: -1,
  },
  document: {
    // body will be rendered into the rendered documents body.
    body: {
      style: {
        backgroundColor: "#fcf1e3",
        color: "#000000",
        padding: "20px",
      },
      rows: [
        // {
        //   type: "Single",
        //   flex: [1],
        //   columns: [
        //     {
        //       type: "Text",
        //       value: "<p>Version 0.0.1</p>",
        //       align: "center",
        //       valign: "middle",
        //       styleOuter: {
        //         overflow: "show",
        //       },
        //       styleInner: {},
        //     },
        //   ],
        // },
        // {
        //   type: "Double",
        //   flex: [1, 1],
        //   columns: [
        //     {
        //       type: "Text",
        //       value: "<h1>EDITOAD</h1>",
        //       align: "right",
        //       valign: "middle",
        //       styleOuter: {
        //         overflow: "show",
        //       },
        //       styleInner: {
        //         margin: "12px",
        //       },
        //     },
        //     {
        //       type: "Text",
        //       value:
        //         "<p style='font-family: Monospace;'>Welcome to Editoad. Drag and drop an element from the sidebar to get started!</p>",
        //       align: "left",
        //       valign: "middle",
        //       styleOuter: {
        //         padding: "10px",
        //         borderRadius: "4px",
        //         overflow: "show",
        //         backgroundColor: "#FFF",
        //       },
        //       styleInner: {},
        //     },
        //   ],
        // },
      ],
    },
  },
  documentHtml: "",
}
