// @flow
import uuid from "uuid/v4"
import { layoutElements } from "./components/elements"
import type { Row, RowTypes, ContentTypes, Column, style } from "./types"
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
    columns: flex.map(() =>
      newColumn("Empty", "Empty", {
        align: "center",
        styleInner: {
          margin: "2px",
          padding: "12px",
          backgroundColor: colors.primary,
          color: colors.light,
          borderRadius: "4px",
        },
      })
    ),
  }
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
