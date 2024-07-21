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
      <div class="flex flex-col md:flex-row justify-between gap-4 2xl:container 2xl:mx-auto mx-4 lg:px-[3vw]">
        <div class="flex flex-col gap-2 text-[--text-title-who-we-are]"
          data-testid={'WhoWeAreSection'}
        >
          <TextFade text={title} className="font-size-responsive-title" dataSalDelay="2000" />
          <TextFade text={description} className="font-size-responsive-description" dataSalDelay="2000" />
        </div>
        <div class="text-[--text-description-who-we-are]">
          <TextFade text={subtitle} className="font-size-responsive-subtitle" dataSalDelay="2000" />
        </div>
      </div>
    </section>
  )
}
