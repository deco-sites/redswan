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
  tagDataTestid: string
}

export default function TextFade({
  text,
  className = '',
  dataSal = 'fade',
  dataSalDelay = '1000',
  tagDataTestid,
}: TextFadeProps) {

  const visible = useBackToTop(tagDataTestid)

  return !visible ? null : (
    <div
      data-sal-delay={dataSalDelay}
      className={"showInDisplay-transition"}
    >
      <HTMLRenderer
        html={text}
        class={className}
      />
    </div>
  )
}
