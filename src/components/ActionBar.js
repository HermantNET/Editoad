// @flow
import React from "react"
import { connect } from "react-redux"
import Paper from "material-ui/Paper"
import { Tabs, Tab } from "material-ui/Tabs"
import IconButton from "material-ui/IconButton"
import FontIcon from "material-ui/FontIcon"
import _styles from "../styles"
import colors from "../styles/colors"
import { editEditorSize, getCode } from "../actions"

type Props = {
  editEditorSize: Function,
  getCode: Function,
}

function mapStateToProps(state: Object): Object {
  return {}
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    editEditorSize: (size: string) => dispatch(editEditorSize(size)),
    getCode: () => dispatch(getCode()),
  }
}

/**
 * Component with shortcuts to common commands
 */
class ActionBar extends React.Component<Props> {
  setEditorSize = (size: string) => {
    this.props.editEditorSize(size)
  }

  displayFull = () => this.setEditorSize("98%")
  displayLaptop = () => this.setEditorSize("1024px")
  displayTablet = () => this.setEditorSize("768px")
  displayPhone = () => this.setEditorSize("320px")

  render() {
    return (
      <Paper style={styles.wrapper} zDepth={1}>
        <div style={styles.groups}>
          <Tabs>
            <Tab
              onTouchTap={this.displayFull}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE30C;</FontIcon>}
            />
            <Tab
              onTouchTap={this.displayLaptop}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE31E;</FontIcon>}
            />
            <Tab
              onTouchTap={this.displayTablet}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE331;</FontIcon>}
            />
            <Tab
              onTouchTap={this.displayPhone}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE32C;</FontIcon>}
            />
          </Tabs>

          <div style={styles.group}>
            <IconButton aria-label="undo" iconStyle={styles.iconButton} iconClassName="material-icons">
              &#xE166;
            </IconButton>
            <IconButton aria-label="redo" iconStyle={styles.iconButton} iconClassName="material-icons">
              &#xE15A;
            </IconButton>
          </div>

          <div style={styles.group}>
            <IconButton aria-label="save" iconStyle={styles.iconButton} iconClassName="material-icons">
              &#xE161;
            </IconButton>
            <IconButton aria-label="fullscreen" iconStyle={styles.iconButton} iconClassName="material-icons">
              &#xE5D0;
            </IconButton>
            <IconButton
              onTouchTap={this.props.getCode}
              aria-label="code"
              iconStyle={styles.iconButton}
              iconClassName="material-icons"
            >
              &#xE86F;
            </IconButton>
            <IconButton aria-label="download" iconStyle={styles.iconButton} iconClassName="material-icons">
              &#xE2C4;
            </IconButton>
          </div>
        </div>
      </Paper>
    )
  }
}

const styles = {
  wrapper: Object.assign({}, _styles.toolbar, {
    backgroundColor: colors.primary,
    color: colors.light,
  }),
  groups: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
  },
  group: {
    display: "flex",
    alignItems: "center",
  },
  tab: {
    width: "48px",
  },
  iconButton: {
    color: colors.light,
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar)
