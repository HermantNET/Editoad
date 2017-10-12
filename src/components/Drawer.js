// @flow
import React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import FontIcon from "material-ui/FontIcon"
import colors from "../styles/colors"
import _styles from "../styles"
import BuildingBlocks from "./BuildingBlocks"
import Layouts from "./Layouts"
//import Properties from "./Properties"
import Settings from "./Settings"

type Props = {}

/**
 * View and edit the settings for an editor element.
 */
class Drawer extends React.Component<Props> {
  render() {
    return (
      <Tabs style={styles.wrapper} contentContainerStyle={styles.tab}>
        <Tab icon={<FontIcon className="material-icons">&#xE156;</FontIcon>}>
          <BuildingBlocks />
        </Tab>
        <Tab icon={<FontIcon className="material-icons">&#xE8F1;</FontIcon>}>
          <Layouts />
        </Tab>
        <Tab icon={<FontIcon className="material-icons">&#xE8B8;</FontIcon>}>
          <Settings />
        </Tab>
      </Tabs>
    )
  }
}

const styles = {
  wrapper: {
    color: colors.light,
  },
  tab: {
    padding: "0.6rem 0.4rem",
  },
}

export default Drawer
