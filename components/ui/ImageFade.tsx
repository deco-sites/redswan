import useScrollEffects from "site/hooks/useScrollEffects.tsx";
import { useRef } from 'preact/hooks'

export interface ImageFadeProps {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  src: string
  alt: string
  width?: string
  height?: string
}

export default function ImageFade({ src, alt, width, height, dataSal = 'fade', dataSalDelay = '1000' }: ImageFadeProps) {
  const myElementRef = useRef(null);
  const { Up } = useScrollEffects({ Up: myElementRef });
  
  return (
    <div
      ref={Up}
      data-sal={dataSal}
      data-sal-delay={dataSalDelay}
      class="w-full h-full"
    >
      <img 
        src={src}
        alt={alt}
      />
    </div>
  )
}
