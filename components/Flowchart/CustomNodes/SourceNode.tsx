import React, {memo} from "react";
import {Connection, Handle, Position} from "react-flow-renderer";

import Node, {contentStyle as style} from "./Node";

// @ts-ignore
const SourceNode = ({data, selected}) => {
  return (
    <Node
      color={"LemonChiffon"}
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Source"}
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

export default memo(SourceNode);
