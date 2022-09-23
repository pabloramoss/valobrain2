import axios from "axios";
import { MicroVideos } from "../types/videos";

export default {
  list: (): Promise<MicroVideos[]> => {
    return axios.get(process.env.DB_MICROS_VIDEOS!, {
      responseType: "blob"
    })
    .then(response => response.data)
  }
}