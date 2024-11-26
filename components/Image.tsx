import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} className="w-full" />

export default Image
