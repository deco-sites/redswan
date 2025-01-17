import TextFade from "site/islands/TextFade.tsx";

export interface WhoWeAreProps {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title: string,

  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  subtitle: string,

  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description: string,
}

export default function WhoWeAre({ description, subtitle, title }: WhoWeAreProps) {
  return (
    <section class="bg-[--background-who-we-are] py-[10vmax]">
      <div
        class="flex flex-col md:flex-row justify-between gap-10 2xl:container 2xl:mx-auto mx-4 px-4 lg:px-[3vw] tracking-tight"
        data-testid={'WhoWeAreSection'}
      >
        <div class="flex flex-col gap-2 md:gap-6 text-[--text-title-who-we-are] font-bold shrink-[7]">
          <TextFade
            text={title}
            className="font-size-responsive-title font-semibold -spacing-2px"
            dataSalDelay="700"
            tagDataTestid="WhoWeAreSection"
          />
          <TextFade
            text={description}
            className="font-size-responsive-description space-y-4 font-semibold"
            dataSalDelay="700"
            tagDataTestid="WhoWeAreSection"
          />
        </div>
        <div class="text-[--text-description-who-we-are] shrink-[8]">
          <TextFade
            text={subtitle}
            className="font-size-responsive-subtitle font-normal space-y-4"
            dataSalDelay="700"
            tagDataTestid="WhoWeAreSection"
          />
        </div>
      </div>
    </section>
  )
}
