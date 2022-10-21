import {useState, useCallback} from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  EdgeChange,
  NodeChange,
  Node,
  Edge,
} from "reactflow";

import SourceNode from "./CustomNodes/SourceNode";
import DefaultNode from "./CustomNodes/DefaultNode";
import TargetNode from "./CustomNodes/TargetNode";

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};

const initialNodes = [
  {
    id: "1",
    type: "sourceNode",
    data: {label: "Source Node"},
    position: {x: 250, y: 25},
  },

  {
    id: "2",
    type: "targetNode",
    data: {label: <div>Target Node</div>},
    position: {x: 100, y: 125},
  },
  {
    id: "3",
    type: "defaultNode",
    data: {label: "Default Node"},
    position: {x: 250, y: 250},
  },
];

const initialEdges = [
  {id: "e1-2", source: "1", target: "2"},
  {id: "e2-3", source: "2", target: "3", animated: true},
];

export const Flowchart: React.FC = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    //@ts-ignore
    (changes: NodeChange[]) => setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds: Edge[]) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <ReactFlow
      fitView
      edges={edges}
      id="este-es-un-id"
      nodeTypes={nodeTypes}
      nodes={nodes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
    />
  );
};
