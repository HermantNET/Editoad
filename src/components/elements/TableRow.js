// @flow
import * as React from "react"
import { DropTarget } from "react-dnd"
import { LAYOUT } from "../../constants"
import TableCell from "../../components/elements/TableCell"
import type { TDPropertiesArray } from "../../types"
import _styles, { block } from "../../styles"

export default function(type: string, flex: Array<number>): React.ComponentType<*> {
  // REACT DnD *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  const documentTarget = {
    drop(props: Object, monitor: Object, component: React.ComponentType<*>) {
      // Obtain the dragged item
      const item: Object = monitor.getItem()
      alert(item.type)
    },
  }

  /**
  * Specifies which props to inject into the Document component.
  */
  function collect(connect: Object, monitor: Object) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDropTarget: connect.dropTarget(),
      // You can ask the monitor about the current drag state:
      isOver: monitor.isOver({ shallow: true }),
    }
  }

  // COMPONENT *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  type Props = {
    data: TDPropertiesArray,
    rowIndex: number,

    // Injected by React DnD:
    connectDropTarget: Function,
    isOver: boolean,
    content: Object,
  }

  class Component extends React.Component<Props, { isOver: boolean }> {
    constructor(props: Props) {
      super(props)

      this.state = {
        isOver: false,
      }
    }

    componentWillReceiveProps(nextProps) {
      // Drag enter
      if (!this.props.isOver && nextProps.isOver) {
        this.setState({ isOver: true })
      }

      // Drag leave
      if (this.props.isOver && !nextProps.isOver) {
        this.setState({ isOver: false })
      }
    }

    static getType = (): string => type

    static getFlex = (): Array<number> => flex

    static renderThumbnail() {
      return (
        <div style={_styles.thumbnailStyles.wrapper}>
          <div style={_styles.flex}>{flex.map((n: number, i) => <div key={i} style={block(n)} />)}</div>
        </div>
      )
    }

    render() {
      const { connectDropTarget, content, data, rowIndex } = this.props
      const { isOver } = this.state
      const isOverStyle: Object = isOver ? _styles.isOver : {}

      return connectDropTarget(
        <tr style={isOverStyle}>
          {flex.map((flex: number, i: number) => (
            <TableCell key={data[i].id} content={content[i]} data={data[i]} rowIndex={rowIndex} index={i} flex={flex} />
          ))}
        </tr>
      )
    }
  }

  return DropTarget(LAYOUT, documentTarget, collect)(Component)
}
