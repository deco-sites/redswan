import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import useBackToTop from "site/hooks/useBackToTop.tsx";

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

  return !visible ? null : (
    <div
      role='button'
      data-sal-delay={dataSalDelay}
      className={`showInDisplay-transition ${classNameContainer}`}
      onMouseLeave={(e: any) => {
        if (event?.status) {
          e.target.classList.add(event?.class)
          setTimeout(() => {
            e.target.classList.remove(event?.class)
          }, 450)
        }
      }}
    >
      <HTMLRenderer
        html={text}
        class={className}
      />
    </div>
  )
}
