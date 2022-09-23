export interface MicroVideos {
  title: string;
  description: string;
  publishTime: string;
  thumbnail: string;
  etag: string;
  agents: Agent[];
  map: Map;
  side: Side;
  team: string;
}

export type Agent = "astra" | "raze" | "fade" | "neon" | "chamber" | "skye" | "yoru" | "kay/o" | "phoenix" | "brimstone" | "jett" | "sage" | "viper" | "breach" | "cypher" | "sova" | "omen" | "reyna" | "killjoy";

export type Map = "ascent" | "haven" | "split" | "pearl" | "bind" | "breeze" | "icebox" | "fracture"

export type Side = "attack" | "defense"
