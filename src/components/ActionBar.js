// @flow
import React from "react"
import { connect } from "react-redux"
import { prettyPrint } from "html"
import Paper from "material-ui/Paper"
import { Tabs, Tab } from "material-ui/Tabs"
import IconButton from "material-ui/IconButton"
import FontIcon from "material-ui/FontIcon"
import Dialog from "material-ui/Dialog"
import type { State } from "../types"
import _styles from "../styles"
import colors from "../styles/colors"
import { editEditorSize, getCode } from "../actions"

type Props = {
  editEditorSize: Function,
  getCode: Function,
  code: string,
}

function mapStateToProps(state: State): Object {
  return {
    code: state.documentHtml,
  }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    editEditorSize: (size: number) => dispatch(editEditorSize(size)),
    getCode: () => dispatch(getCode()),
  }
}

/**
 * Component with shortcuts to common commands
 */
class ActionBar extends React.Component<Props, { codeDialog: boolean }> {
  constructor(props: Props) {
    super(props)

    this.state = {
      codeDialog: false,
    }
  }

  setEditorSize = (size: number) => {
    this.props.editEditorSize(size)
  }

  displayFull = () => this.setEditorSize(-1)
  displayLaptop = () => this.setEditorSize(1024)
  displayTablet = () => this.setEditorSize(768)
  displayPhone = () => this.setEditorSize(375)

  toggleCodeModal = () => {
    !this.state.codeDialog && this.props.getCode()
    this.setState({
      codeDialog: !this.state.codeDialog,
    })
  }

  openInWindow = () => {
    this.props.getCode()
    setTimeout(() => {
      var x = window.open()
      x.document.open()
      x.document.write(this.props.code)
      x.document.close()
    }, 500)
  }

  render() {
    return (
      <Paper style={styles.wrapper} zDepth={1}>
        <div style={styles.groups}>
          <Tabs>
            <Tab
              onClick={this.displayFull}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE30C;</FontIcon>}
            />
            <Tab
              onClick={this.displayLaptop}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE31E;</FontIcon>}
            />
            <Tab
              onClick={this.displayTablet}
              style={styles.tab}
              icon={<FontIcon className="material-icons">&#xE331;</FontIcon>}
            />
            <Tab
              onClick={this.displayPhone}
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
            <IconButton
              onClick={this.openInWindow}
              aria-label="fullscreen"
              iconStyle={styles.iconButton}
              iconClassName="material-icons"
            >
              &#xE5D0;
            </IconButton>
            <IconButton
              onClick={this.toggleCodeModal}
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
        <Dialog open={this.state.codeDialog} onRequestClose={this.toggleCodeModal} autoScrollBodyContent={true}>
          <pre style={styles.code}>{prettyPrint(this.props.code)}</pre>
        </Dialog>
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
  code: {
    padding: 0,
    margin: 0,
    fontFamily: "Monospace",
    fontSize: "12px",
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar)
