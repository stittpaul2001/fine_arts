import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Art.js"
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"



class ArtWorksService {

async getArtWork() {
  const response = await api.get(`api/artworks`)
  logger.log('Got Art', response.data)
  const artwork = response.data.results.map(pojo => new Artwork(pojo))
  AppState.Artworks = artwork
}

}

export const artworksService = new ArtWorksService()