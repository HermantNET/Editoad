// @flow
export type align = "left" | "right" | "center"
export type valign = "top" | "middle" | "bottom" | "baseline"
export type style = { [string]: string | number }

export type ContentTypes = "Text" | "Button" | "Divider" | "Html" | "Image" | "Empty"
export type TDProperties = {
  id: string,
  type: ContentTypes,
  align: align,
  valign: valign,
  styleOuter: style,
  styleInner: style,
  value: string | null,
}
export type TDPropertiesArray = Array<TDProperties>
export type Column = TDProperties

export type RowTypes = "Single" | "Double" | "Triple" | "Quad" | "OneTwo" | "TwoOne" | "QuadOneTwo"
export type Row = {
  id: string,
  type: RowTypes,
  flex: Array<number>,
  columns: Array<Column>,
}

export type Document = {
  body: {
    style: style,
    rows: Array<Row>,
  },
}

export type Editor = {
  size: number,
  fonts: Array<string>,
  selected_id: string,
  selected_rowIndex: number,
  selected_cellIndex: number,
}

export type State = {
  editor: Editor,
  document: Document,
  documentHtml: string,
}

export type Action = Object & {
  type: string,
}
