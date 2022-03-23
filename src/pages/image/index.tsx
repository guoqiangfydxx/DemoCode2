/** @format */

import React, { useEffect, useRef } from 'react';
function Image({
  src,
  onLoad
}: {
  src: string;
  onLoad: (src: string) => void;
}) {
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function Load() {
      console.log('图片完全加载完成', src);
      onLoad(src);
    }
    // image.current?.removeEventListener('load', Load, false);
    image.current?.addEventListener('load', Load, false);
    return () => {
      console.log('remove');
      image.current?.removeEventListener('load', Load, false);
    };
  }, []);

  return (
    <div>
      <img ref={image} src={src} alt="s" />
    </div>
  );
}
export default Image;
