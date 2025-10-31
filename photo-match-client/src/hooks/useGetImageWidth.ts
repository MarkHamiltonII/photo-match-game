import { useEffect, useState } from "react";

export function useGetImageWidth(args: Args): number {
    const [width, setWidth] = useState(0);
    const { imageRef, url } = args;
      useEffect(() => {
        const img = imageRef.current
        function getImageWidth() {
          if (img) {
            setWidth(img.offsetWidth)
          }
        }
    
        if (img && img.complete) {
          getImageWidth()
        } else if (img) {
          img.addEventListener('load', getImageWidth)
        } 
    
        return () => {
          if (img) img.removeEventListener('load', getImageWidth)
        }
      }, [url])
      return width;
}

type Args = {
    imageRef: React.RefObject<HTMLImageElement | null>;
    url: string;
}