import TextFade from "site/islands/TextFade.tsx";
import ButtonFade from "site/islands/ButtonFade.tsx";
import Cards from "site/components/ui/OurFamily/Cards.tsx";
import { ICard } from "site/components/ui/OurFamily/Card.tsx";

export interface OurFamilyProps {
  title: string,
  cta: {
    text: string,
    link: string
  },
  cards: ICard[]
}

export default function OurFamily({ cta, title, cards }: OurFamilyProps) {
  return (
    <section class="bg-[--background-our-family] text-[--text-our-family] py-[5vmax]">
      <div class="lg:container lg:mx-auto mx-4 flex flex-col gap-4">
        <TextFade text={title} className="" dataSalDelay="1000"  />
        <ButtonFade text={cta?.text} link={cta?.link} class="" dataSalDelay="1000" />
      </div>
      <div class="lg:container lg:mx-auto mx-4 pt-6">
        <Cards cards={cards} />
      </div>
    </section>
  )
}
