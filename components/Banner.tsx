import Image from 'next/image'

export function Banner({ headline, subheadline, image, cta_text, cta_link }: any) {
  return (
    <div className="flex items-center justify-center text-center bg-gray-100 overflow-hidden">
      <Image
        width={250}
        height={250}
        src={image.filename}
        alt={headline}
        // substitui layout="fill"
        className="object-cover opacity-30 "
      />
      <div className="relative z-10 space-y-2">
        <h1 className="text-3xl font-bold">{headline}</h1>
        <p className="text-lg">{subheadline}</p>
        {cta_text && (
          <a href={cta_link} className="inline-block px-4 py-2 bg-blue-600 text-white rounded">
            {cta_text}
          </a>
        )}
      </div>
    </div>
  )
}
