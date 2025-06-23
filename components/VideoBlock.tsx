export function VideoBlock({ video_url, caption }: any) {
  return (
    <div className="space-y-2">
      <iframe
        className="w-full h-64"
        src={video_url}
        title={caption}
        allowFullScreen
      />
      {caption && <p className="text-sm italic">{caption}</p>}
    </div>
  )
}
