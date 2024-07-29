import useScrollEffects from "site/hooks/useScrollEffects.tsx";
import { useRef } from 'preact/hooks'
import useBackToTop from "site/hooks/useBackToTop.tsx";

export interface ImageFadeProps {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  src: string
  alt: string
  width?: string
  height?: string
  class?: string
  tagDataTestid: string
}

export default function ImageFade({
  src,
  alt,
  width,
  height,
  class: className = '',
  dataSal = 'fade',
  dataSalDelay = '1000',
  tagDataTestid
}: ImageFadeProps) {

  const visible = useBackToTop(tagDataTestid)
  
  return (
    <div
      style={{ transitionDelay: dataSalDelay + 'ms' }}
      class={`w-full opacityEvent ${!visible ? '' : 'show'}`}
    >
      { !visible ? null : (
        <img 
          src={src}
          alt={alt}
          width={width}
          height={height}
          class={className}
        />
      ) }
    </div>
  )
}
