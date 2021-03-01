import sanityClient from '@sanity/client'
import { api } from '../../studio/sanity.json'
// import imageUrlBuilder from '@sanity/image-url'
const { projectId, dataset } = api


const apiClient = sanityClient({
  projectId,
  dataset,
  useCdn: true
})

// const builder = imageUrlBuilder(sanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }

export default apiClient
