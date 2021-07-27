import React from 'react';
import { Image, ImageProps } from 'antd';

interface IImageProps extends ImageProps {
    width?: number;
    src: string;
}

const initSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const Images: React.FC<IImageProps> = (props) => {
  const { width = 200, src = initSrc, ...rest } = props;

  return (
    <Image
      width={width}
      src={src}
      {...rest}
    />
  );
};

export default Images;
