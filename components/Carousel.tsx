import Image from 'next/image'

type CarouselProps = {
  images: Array<{
    filename: string
    alt?: string
    // outros metadados do Storyblok Asset...
  }>
}

export function Carousel({ images }: CarouselProps) {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4">
      {images.map((img) => (
        <div key={img.filename} className="relative w-64 h-40">
          <Image
            src={img.filename}
            alt={img.alt || ''}
            fill
            className="object-cover rounded"
          />
        </div>
      ))}
    </div>
  )
}
