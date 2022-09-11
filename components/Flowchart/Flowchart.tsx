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
} from "react-flow-renderer";

import SourceNode from "./CustomNodes/SourceNode";

const nodeTypes = {
  sourceNode: SourceNode,
  // dataNode: DataNode,
  // functionNode: FunctionNode,
  // valueNode: ValueNode
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
    type: "sourceNode",
    data: {label: <div>Default Node</div>},
    position: {x: 100, y: 125},
  },
  {
    id: "3",
    type: "sourceNode",
    data: {label: "Output Node"},
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
      nodeTypes={nodeTypes}
      nodes={nodes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
    />
  );
};
