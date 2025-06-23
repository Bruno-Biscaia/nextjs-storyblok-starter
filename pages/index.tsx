// pages/index.tsx
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import { Carousel } from '../components/Carousel'
import { VideoBlock } from '../components/VideoBlock'
import { Testimonial } from '../components/Testimonial'
import { getHomeStory, StoryData } from '../services/homeService'

type StoryblokBlock = {
  component: string
  _uid: string
  [key: string]: any
}

interface BlocksByType {
  [component: string]: StoryblokBlock[] | undefined
}

const Home: NextPage = () => {
  const [blocksByType, setBlocksByType] = useState<BlocksByType>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        // agora retorna direto o StoryData
        const story = await getHomeStory()
        const body: StoryblokBlock[] = story.content.body

        const grouped = body.reduce<BlocksByType>((acc, blok) => {
          if (!acc[blok.component]) acc[blok.component] = []
          acc[blok.component]!.push(blok)
          return acc
        }, {})

        setBlocksByType(grouped)
      } catch (err) {
        console.error('Erro ao buscar a Home:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Carregando...</p>

  // agora sim esses valores existem
  const bannerData = blocksByType.Banner?.[0]
  const carouselData = blocksByType.Carousel?.[0]

  console.log(bannerData, 'bannerData')
  console.log(carouselData, 'carouselData')

  return (
    <Layout>
      <div className='w-full max-h-[600px] '>
        {bannerData && <Banner {...bannerData} />}
      </div>
      {/* {carouselData && <Carousel images={carouselData.images} />} */}
      {/* ... resto dos componentes */}
    </Layout>
  )
}

export default Home
