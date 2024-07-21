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
      <div 
        class="2xl:container 2xl:mx-auto mx-4 lg:px-[3vw] flex flex-col gap-4"
        data-testid={'OurFamilySection'}
      >
        <TextFade text={title} className="" dataSalDelay="1000"  />
        <ButtonFade text={cta?.text} link={cta?.link} class="" dataSalDelay="1000" />
      </div>
      <div class="lg:container lg:mx-auto mx-4 pt-6">
        <Cards cards={cards} />
      </div>
    </section>
  )
}
