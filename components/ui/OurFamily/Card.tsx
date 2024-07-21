import { ImageWidget } from "apps/admin/widgets.ts";
import { useRef } from "preact/hooks";
import useScrollEffects from "site/hooks/useScrollEffects.tsx";
import useBackToTop from "site/hooks/useBackToTop.tsx";

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

  const visible = useBackToTop('OurFamilySection')
  
  return !visible ? <div /> : (
    <div
      ref={Up}
      data-sal={dataSal}
      data-sal-delay={parseFloat(dataSalDelay) + (60 * index)}
    >
      <a
        href={link ?? '#'}
        class="flex flex-col gap-2 items-center justify-center cursor-pointer h-full w-full bg-[--background-card-our-family] hover:bg-[--background-hover-card-our-family] replace-title delay-0"
      >
        <img src={logo} alt={`logo empresa ${link}`} class="title-without-hover" />
        <p
          class="description text-[--description-card-our-family] text-[2rem] text-center"
        >
          {description}
        </p>
        <h2 class="title-with-hover text-[--title-card-our-family] leading-[30px]">{titleHover}</h2>
      </a>
    </div>
  )
}
