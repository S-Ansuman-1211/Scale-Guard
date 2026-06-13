import { useState } from 'react'
import './Figure.css'

// Image with a navy-gradient fallback so layouts never break on a failed load.
// `contain` shows the whole image (no crop) on a light panel — for diagrams.
export default function Figure({
  src,
  alt = '',
  caption,
  className = '',
  ratio = '4 / 3',
  contain = false,
}) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className={`figure ${className}`}>
      <div
        className={`figure__frame ${contain ? 'figure__frame--contain' : ''}`}
        style={{ aspectRatio: ratio }}
      >
        {!failed && src && (
          <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        )}
        {failed && <span className="figure__fallback">ScaleGuard</span>}
      </div>
      {caption && <figcaption className="figure__caption">{caption}</figcaption>}
    </figure>
  )
}
