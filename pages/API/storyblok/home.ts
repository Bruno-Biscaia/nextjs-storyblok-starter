// pages/api/storyblok/home.ts
import type { NextApiHandler } from 'next'
import axios from 'axios'

const handler: NextApiHandler = async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://api.storyblok.com/v2/cdn/stories/home',
      { params: { token: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN } }
    )
    res.status(200).json(data.story)
  } catch (e: any) {
    res.status(e.response?.status || 500).json({ error: e.message })
  }
}

export default handler
