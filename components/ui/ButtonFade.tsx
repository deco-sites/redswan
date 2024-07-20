import useScrollEffects from "site/hooks/useScrollEffects.tsx";
import { useRef } from "preact/hooks";

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
}

export default function ButtonFade({ text,  dataSal = 'fade', dataSalDelay = '1000', link, onClick = () => {}, ...props }: IButton) {
  // Evento de subir na tela
  const myElementRef = useRef(null);
  // deno-lint-ignore no-explicit-any
  const { Up }: any = useScrollEffects({ Up: myElementRef });
  
  return (
    <button
      ref={Up}
      data-sal={dataSal}
      data-sal-delay={dataSalDelay}
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
