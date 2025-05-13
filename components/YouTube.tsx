'use client'
export interface YoutubeProps {
  title: string
  uid: string
}

export function YouTube(props: YoutubeProps) {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
      ></iframe>
    </div>
  )
}

export default YouTube
