import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { useRef } from "preact/hooks";
import useScrollEffects from "site/hooks/useScrollEffects.tsx";

export interface TextFadeProps {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  text: HTML,
  className?: string
}

export default function TextFade({ text, className = '', dataSal = 'fade', dataSalDelay = '1000' }: TextFadeProps) {
  // Evento de subir na tela
  const myElementRef = useRef(null);
  const { Up } = useScrollEffects({ Up: myElementRef });

  return (
    <div
      ref={Up}
    >
      <HTMLRenderer
        data-sal={dataSal}
        data-sal-delay={dataSalDelay}
        html={text}
        class={className}
      />
    </div>
  )
}
