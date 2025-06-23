// services/homeService.ts
import apiClient from '../lib/apiClient'

export interface StoryData {
  content: {
    body: Array<any>
  }
  [key: string]: any
}

/**
 * Busca a story “home” no Storyblok e devolve diretamente o objeto story.
 */
export async function getHomeStory(): Promise<StoryData> {
  const response = await apiClient.get<{
    story: StoryData
  }>('/cdn/stories/home')
  return response.data.story
}
