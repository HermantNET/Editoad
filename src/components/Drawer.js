// @flow
import React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import FontIcon from "material-ui/FontIcon"
import colors from "../styles/colors"
import BuildingBlocks from "./BuildingBlocks"
import Layouts from "./Layouts"
import Properties from "./Properties"
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
        <Tab icon={<FontIcon className="material-icons">&#xE254;</FontIcon>}>
          <Properties />
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
    height: "100vh",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  tab: {
    height: "calc(100% - 48px - 4rem)",
    padding: "0.6rem 0.4rem",
    paddingBottom: "4rem",
    overflowX: "hidden",
    overflowY: "scroll",
  },
}

export default Drawer
