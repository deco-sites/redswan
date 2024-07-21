import useScrollEffects from "site/hooks/useScrollEffects.tsx";
import { useRef } from "preact/hooks";
import useBackToTop from "site/hooks/useBackToTop.tsx";

export type IButton = {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  id?: string
  class?: string
  text: string
  onClick?: () => void
  link?: string
  tagDataTestid: string
}

export default function ButtonFade({
  text,
  dataSal = 'fade',
  dataSalDelay = '1000',
  link,
  onClick = () => {},
  tagDataTestid,
  class: className = '',
  ...props
}: IButton) {

  const visible = useBackToTop(tagDataTestid)
  
  return !visible ? null : (
    <button
      data-sal-delay={dataSalDelay}
      className={`showInDisplay-transition ${className}`}
      {...props}
      onClick={() => {
        if (link) {
          window.location.href = link
        }
        onClick()
      }}
    >
      {text}
    </button>
  )
}
