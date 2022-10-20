import React, {memo} from "react";
import {Handle, Position} from "react-flow-renderer";
// import {Handle, Position} from "reactflow";

import Node, {contentStyle as style} from "./Node";

// @ts-ignore
const DefaultNode = ({data, selected}) => {
  return (
    <Node
      color={"lightgrey"}
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Default"}
          <Handle
            id="o__data"
            position={Position.Left}
            style={{...style.handle, ...style.right}}
            type="target"
          />
          <Handle
            id="o__data"
            position={Position.Right}
            style={{...style.handle, ...style.right}}
            type="source"
          />
        </div>
      }
      label={data.name}
      selected={selected}
    />
  );
};

export default memo(DefaultNode);
