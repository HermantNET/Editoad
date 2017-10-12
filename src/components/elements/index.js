//@flow
// CONTENT ELEMENTS
import React from "react"
import Button from "./content/Button"
import Divider from "./content/Divider"
import Html from "./content/Html"
import Image from "./content/Image"
import Text from "./content/Text"
// LAYOUT ELEMENTS
import Single from "./layout/Single"
import Double from "./layout/Double"
import Triple from "./layout/Triple"
import Quad from "./layout/Quad"
import OneTwo from "./layout/OneTwo"
import TwoOne from "./layout/TwoOne"
import QuadOneTwo from "./layout/QuadOneTwo"

export const contentElements = { Button, Divider, Html, Image, Text }
export const layoutElements = { Single, Double, Triple, Quad, OneTwo, TwoOne, QuadOneTwo }

export const contentArray = Object.keys(contentElements).reduce((prev, curr) => prev.concat(contentElements[curr]), [])
export const layoutArray = Object.keys(layoutElements).reduce((prev, curr) => prev.concat(layoutElements[curr]), [])
