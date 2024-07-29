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
        class="2xl:container 2xl:mx-auto mx-4 px-4 lg:px-[3vw] flex flex-col items-start gap-4 md:gap-8 spacing-1px"
        data-testid={'OurFamilySection'}
      >
        <TextFade
          text={title}
          className="font-size-responsive-title font-semibold"
          dataSalDelay="1000"
          tagDataTestid="OurFamilySection"
        />
        <ButtonFade
          text={cta?.text}
          link={cta?.link}
          class="bg-[--background-hover-card-our-family] text-[--description-card-our-family]
          before:hover:bg-[--background-card-our-family] hover:text-[--text-hover-our-family]
          px-5 py-3 font-bold button-cubic"
          dataSalDelay="1000"
          tagDataTestid="OurFamilySection"
        />
      </div>
      <div class="2xl:container 2xl:mx-auto mx-4 px-4 lg:px-[3vw] pt-6 sm:pt-10 md:pt-16">
        <Cards cards={cards} />
      </div>
    </section>
  )
}
