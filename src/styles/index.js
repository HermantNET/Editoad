// @flow
import colors from "./colors"

export const block = (flex: number): Object => {
  return {
    height: "40px",
    backgroundColor: colors.primary,
    borderRadius: "2px",
    margin: "0 2px",
    flex,
  }
}

const styles: { [string]: Object } = {
  flex: {
    display: "flex",
  },
  f1: {
    flex: 1,
  },
  textPrimary: {
    color: colors.primary,
  },
  toolbar: {
    height: "48px",
    zIndex: 1,
    borderRadius: 0,
    padding: "0 0.4rem",
  },
  thumbnailStyles: {
    wrapper: {
      textAlign: "center",
      padding: "12px",
    },
    icon: {
      fontSize: "72px",
    },
  },
  drawerButton: {
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    contentButtonWrapper: {
      width: "48%",
      borderRadius: "4px",
      border: "1px solid white",
      marginBottom: "12px",
      color: colors.primary,
    },
    layoutButtonWrapper: {
      width: "100%",
      borderRadius: "4px",
      border: "1px solid white",
      marginBottom: "12px",
      color: colors.primary,
    },
  },
  isOver: {
    borderBottom: "4px dashed " + colors.primary,
  },
  isOverCell: {
    boxShadow: "inset 0 0 12px rgba(0,0,0,0.4)",
  },
}

export default styles
