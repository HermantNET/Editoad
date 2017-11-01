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
  text_center: {
    textAlign: "center",
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
      cursor: "pointer",
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
  editBox: {
    textAlign: "center",
  },
  propertyGroup: {
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
}

const margin = (() => {
  return [0, 4, 8, 12, 16].reduce(
    (acc, px, i) =>
      Object.assign({}, acc, {
        [`m_${i}`]: { margin: `${px}px` },
        [`ml_${i}`]: { marginLeft: `${px}px` },
        [`mr_${i}`]: { marginRight: `${px}px` },
        [`mt_${i}`]: { marginTop: `${px}px` },
        [`mb_${i}`]: { marginBottom: `${px}px` },
        [`mx_${i}`]: { marginLeft: `${px}px`, marginRight: `${px}px` },
        [`my_${i}`]: { marginTop: `${px}px`, marginBottom: `${px}px` },
      }),
    {}
  )
})()

const padding = (() => {
  return [0, 4, 8, 12, 16].reduce(
    (acc, px, i) =>
      Object.assign({}, acc, {
        [`p_${i}`]: { padding: `${px}px` },
        [`pl_${i}`]: { paddingLeft: `${px}px` },
        [`pr_${i}`]: { paddingRight: `${px}px` },
        [`pt_${i}`]: { paddingTop: `${px}px` },
        [`pb_${i}`]: { paddingBottom: `${px}px` },
        [`px_${i}`]: { paddingLeft: `${px}px`, paddingRight: `${px}px` },
        [`py_${i}`]: { paddingTop: `${px}px`, paddingBottom: `${px}px` },
      }),
    {}
  )
})()

export default Object.assign({}, styles, margin, padding)
