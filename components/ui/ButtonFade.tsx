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
  onMouseLeave?: () => void
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
  
  return (
    <div
      style={{ transitionDelay: dataSalDelay + 'ms' }}
      class={`opacityEvent ${!visible ? '' : 'show'}`}
    >
      { !visible ? null : (
        <button
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
      )}
    </div>
  )
}
