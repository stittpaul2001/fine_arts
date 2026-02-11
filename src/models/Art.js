


export class Artwork {
  constructor(data){

    this.id = data.id
    this.description = data.description
    this.imgUrls = data.imgUrls
    this.attribution = data.attribution
    this.originalLink = data.originalLink
    this.slug = data.slug
  }
}