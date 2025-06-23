// lib/apiClient.ts
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.storyblok.com/v2',
  params: {
    token: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN
  }
})

export default apiClient
