import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
  ProjectConfig,
} from 'next-sanity'

interface IConfig extends ProjectConfig {
  useCdn: boolean;
}

const config: IConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === 'production',
}

export const imageBuilder = (source: SanityImageSource) => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const client = createClient(config)
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview: boolean) => (usePreview ? previewClient : client)
export default client
