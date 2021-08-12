import React from 'react'
import { Image, ImageProps } from 'antd'

interface IImageProps extends ImageProps {
  width?: number
  src: string
}

const initSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'

const Images: React.FC<IImageProps> = (props) => {
  const { width = 300, src = initSrc, height = 150, ...rest } = props

  return (
    <div style={{ margin: '20px 0' }}>
      <Image width={width} height={height} src={src} {...rest} />
    </div>
  )
}

export default Images
