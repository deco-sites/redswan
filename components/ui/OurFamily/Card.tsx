import { ImageWidget } from "apps/admin/widgets.ts";
import { useRef } from "preact/hooks";
import useScrollEffects from "site/hooks/useScrollEffects.tsx";

export type ICard = {
  logo?: ImageWidget,
  title?: string,
  titleHover: string,
  description: string,
  link: string,
}

export interface CardProps extends ICard {
  /** @description option available for animation effect: fade or slide-up */
  dataSal?: string;
  /** @description transition-delay duration, example: 1000 = 1s */
  dataSalDelay?: string;

  index: number
}

export default function Card({ logo, description, link, title = '', titleHover, index, dataSal = 'fade', dataSalDelay = '1000' }: CardProps) {
  const myElementRef = useRef(null);
  const { Up } = useScrollEffects({ Up: myElementRef });
  
  return (
    <div
      ref={Up}
      data-sal={dataSal}
      data-sal-delay={parseFloat(dataSalDelay) * index}
      class="bg-[--background-card-our-family] hover:bg-[--background-hover-card-our-family] hover:replace-title"
    >
      { logo 
      ? <img src={logo} alt={`logo empresa ${link}`} class="title-without-hover" />
      : <h2 class="title-without-hover text-[--title-card-our-family]">{title}</h2>
      }
      <p class="description text-[--description-card-our-family]">{description}</p>
      <h2 class="title-with-hover text-[--title-card-our-family]">{titleHover}</h2>
    </div>
  )
}
