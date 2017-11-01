//@flow
// CONTENT ELEMENTS
import * as React from "react"
// import Button from "./block/Button"
// import Divider from "./block/Divider"
// import Html from "./block/Html"
import Image from "./block/Image"
import Text from "./block/Text"
import _Empty from "./block/Empty"
// LAYOUT ELEMENTS
import Row from "./TableRow.js"

export const Empty = _Empty

/**
 * Block elements are the elements that fit inside layout elements. They are the content of the page.
 */
export const blockElements: { [string]: React.ComponentType<*> } = { /* Button, Divider, Html,*/ Image, Text }

/**
 * Layout elements define the layout of the page. Layout elements are the containers for Block elements.
 */
export const layoutElements: { [string]: React.ComponentType<*> } = {
  Single: Row("Single", [1]),
  Double: Row("Double", [1, 1]),
  Triple: Row("Triple", [1, 1, 1]),
  Quad: Row("Quad", [1, 1, 1, 1]),
  OneTwo: Row("OneTwo", [1, 2]),
  TwoOne: Row("TwoOne", [2, 1]),
  QuadOneTwo: Row("QuadOneTwo", [1, 2, 1, 2]),
  QuadTwoOne: Row("QuadTwoOne", [2, 1, 2, 1]),
}

export const blockArray = Object.keys(blockElements).reduce((prev, curr) => prev.concat(blockElements[curr]), [])
export const layoutArray = Object.keys(layoutElements).reduce((prev, curr) => prev.concat(layoutElements[curr]), [])
