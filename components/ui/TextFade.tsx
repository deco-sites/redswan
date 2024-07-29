import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import useBackToTop from "site/hooks/useBackToTop.tsx";
import { useRef } from 'preact/hooks'
import useScrollEffects from "site/hooks/useScrollEffects.tsx";

export interface TextFadeProps {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  text: HTML,
  className?: string
  classNameContainer?: string
  tagDataTestid: string
  event?: {
    status: boolean,
    class: string
  }
}

export default function TextFade({
  text,
  className = '',
  classNameContainer = '',
  dataSal = 'fade',
  dataSalDelay = '1000',
  tagDataTestid,
  event = { status: false, class: '' }
}: TextFadeProps) {

  const visible = useBackToTop(tagDataTestid)

  return (
    <div
      role='button'
      style={{ transitionDelay: dataSalDelay + 'ms' }}
      className={`opacityEvent ${!visible ? '' : 'show'} ${classNameContainer}`}
      onMouseLeave={(e: any) => {
        if (event?.status) {
          e.target.classList.add(event?.class)
          setTimeout(() => {
            e.target.classList.remove(event?.class)
          }, 450)
        }
      }}
    >
      { !visible ? null : (
        <HTMLRenderer
          html={text}
          class={className}
        />
      )}
    </div>
  )
}
