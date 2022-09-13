import React, {memo} from "react";
import {Handle, Position} from "react-flow-renderer";

import Node, {contentStyle as style} from "./Node";

// @ts-ignore
const TargetNode = ({data, selected}) => {
  return (
    <Node
      color={"LemonChiffon"}
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Target"}
          <Handle
            id="o__data"
            position={Position.Left}
            style={{...style.handle, ...style.right}}
            type="target"
          />
        </div>
      }
      label={data.name}
      selected={selected}
    />
  );
};

export default memo(TargetNode);
