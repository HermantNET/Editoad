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
    columns: flex.map(() => newColumn()),
  }
}

/**
 * Returns a new Column.
 */
export function newColumn(
  type: ContentTypes = "Empty",
  value: string = "Empty",
  styleOuter: style = {},
  styleInner: style = {
    margin: "2px",
    padding: "12px",
    backgroundColor: colors.primary,
    color: colors.light,
    borderRadius: "4px",
  }
): Column {
  return {
    id: uuid(),
    type,
    align: "center",
    valign: "middle",
    styleOuter,
    styleInner,
    value,
  }
}
