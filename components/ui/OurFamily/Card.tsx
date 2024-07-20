import { ImageWidget } from "apps/admin/widgets.ts";

export type ICard = {
  logo?: ImageWidget,
  title?: string,
  titleHover: string,
  description: string,
  link: string,
}

export interface CardProps extends ICard {
  index: number
}

export default function Card({ logo, description, link, title = '', titleHover, index }: CardProps) {
  return (
    <div class="bg-[--background-card-our-family] hover:bg-[--background-hover-card-our-family] hover:replace-title">
      { logo 
      ? <img src={logo} alt={`logo empresa ${link}`} class="title-without-hover" />
      : <h2 class="title-without-hover text-[--title-card-our-family]">{title}</h2>
      }
      <p class="description text-[--description-card-our-family]">{description}</p>
      <h2 class="title-with-hover text-[--title-card-our-family]">{titleHover}</h2>
    </div>
  )
}
