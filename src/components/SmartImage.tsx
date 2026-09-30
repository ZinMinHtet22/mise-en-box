import { useState } from 'react'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export function SmartImage({ src, alt, className, loading = 'lazy' }: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`placeholder ${className ?? ''}`} role="img" aria-label={alt}>
        {alt}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
