import Image from 'next/image'

export function Testimonial({ quote, author, avatar }: any) {
  return (
    <blockquote className="p-4 border-l-4 border-blue-500 space-y-2">
      <p>"{quote}"</p>
      <div className="flex items-center space-x-2">
        {avatar && (
          <Image
            src={avatar.filename}
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <span className="font-semibold">{author}</span>
      </div>
    </blockquote>
  )
}
