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
    <section class="bg-[--background-section-truth-tellers] text-[--text-truth-tellers]">
      <div class="flex flex-col md:flex-row justify-between gap-4 lg:container lg:mx-auto mx-4">
        <div class="flex flex-col gap-2">
          <TextFade text={title} className="font-size-responsive-title" dataSalDelay="2000" />
          <TextFade text={description} className="font-size-responsive-description" dataSalDelay="2000" />
        </div>
        <div>
          <TextFade text={subtitle} className="font-size-responsive-subtitle" dataSalDelay="2000" />
        </div>
      </div>
    </section>
  )
}
