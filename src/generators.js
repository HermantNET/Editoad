// @flow
import uuid from "uuid/v4"
import { layoutElements } from "./components/elements"
import type { Row, RowTypes, ContentTypes, Column } from "./types"
import colors from "./styles/colors"

/**
 * Returns a new Row.
 */
export function newRow(type: RowTypes): Row {
  const flex: Array<number> = layoutElements[type].getFlex()
  return {
    id: uuid(),
    type,
    flex,
    columns: flex.map(() => emptyCol()),
  }
}

export function emptyCol(): Column {
  return newColumn("Empty", "Empty", {
    align: "center",
    valign: "middle",
    styleInner: {
      verticalAlign: "middle",
      padding: "12px",
      height: "100%",
      backgroundColor: colors.primary,
      color: colors.light,
      borderRadius: "4px",
      userSelect: "none",
    },
    styleOuter: {
      padding: "2px",
    },
  })
}

/**
 * Returns a new Column.
 */
export function newColumn(type: ContentTypes, value: string, options: Object): Column {
  const defaultColumn: Object = {
    styleOuter: {},
    styleInner: {},
    align: "left",
    valign: "top",
  }

  return Object.assign({}, defaultColumn, options, { id: uuid(), type, value })
}
