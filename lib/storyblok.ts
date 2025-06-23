import StoryblokClient from 'storyblok-js-client'

const storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN || '',
  cache: { clear: 'auto', type: 'memory' }
})

export default storyblok
