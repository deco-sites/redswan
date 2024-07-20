import useScrollEffects from "../../hooks/useScrollEffects.tsx";
import { useRef } from "preact/hooks";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import useBackToTop from "../../hooks/useBackToTop.tsx";

export interface IntersectionProps {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  card: {
    title: string;
    description: HTML;
  }
}

export default function Intersection({ dataSal, dataSalDelay, card }: IntersectionProps) {
  // Evento de subir na tela
  const myElementRef = useRef(null);
  const { Up } = useScrollEffects({ Up: myElementRef });

  // Evento que faz com que o elemento apareça na tela somente com uma condição
  const percentageToAppear = 0.3;
  const isVisible = useBackToTop(percentageToAppear);

  return (
    <div>
      <div
        ref={Up}
        data-sal={dataSal}
        data-sal-delay={dataSalDelay}
      >
        <HTMLRenderer
        html={card.description || ""}
        class="text-center mt-[20px] md:text-[16px] text-[14px] leading-tight"
      />
      </div>
      função que renderiza a seta somente se ela aparecer em um tamanho especifico
      {isVisible && (
        <div class="fixed sm:bottom-[1.6rem] bottom-[1rem] sm:right-[calc(100%-92%)] right-[calc(100%-95%)] max-w-[1200px] w-full mx-auto flex justify-end">
          <a
            href={`#${id || ""}`}
            class="w-[35px] h-[43.47px] bg-[#2f80ed] text-white rounded-[5px] p-[10px] text-[20px] flex justify-center items-center"
          >
            ↑
          </a>
        </div>
      )}
    </div>
  )
}