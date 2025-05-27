import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, alt, ...rest }: ImageProps) => (
  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
    <NextImage
      style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
      src={`${basePath || ''}${src}`}
      alt={`${alt || ''}`}
      {...rest}
    />
    {alt && <p style={{ fontStyle: 'italic', fontSize: '1.3rem', margin: '0.1rem 0' }}>{alt}</p>}
  </div>
)

export default Image
